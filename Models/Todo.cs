using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TodoMVC.Models
{
  public class Todo
  {
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; set; }

    [Column("Name", TypeName = "text")]
    [StringLengthAttribute(100)]
    public string Name { get; set; }

    [Column("Content", TypeName = "tinyint")]
    public bool isCompleted { get; set; }

    private readonly TodoContext _context;

    public Todo() {}

    public Todo(TodoContext context)
    {
      _context = context;
      // var optionsBuilder = new DbContextOptionsBuilder<TodoContext>();
      // optionsBuilder.UseSqlite("Data Source=./todo.sqlite");
      // _context =  new TodoContext(optionsBuilder.Options);
    }

    public IEnumerable<Todo> GetALl()
    {
      return _context.Items.ToList();
    }

    public void Add(Todo todo)
    {
      _context.Items.Add(todo);
      _context.SaveChanges();
    }

    public void Remove(int Id)
    {
      _context.Remove(GetItem(Id));
      _context.SaveChanges();
    }

    public void Update(Todo Item)
    {
      _context.Items.Update(Item);
      _context.SaveChanges();
    }

    public Todo GetItem(int Id)
    {
      return _context.Items.FirstOrDefault(item => item.Id == Id);
    }
  }

  public class TodoContext : DbContext
  {
    public TodoContext(DbContextOptions<TodoContext> options) : base(options) { }
    public DbSet<Todo> Items { get; set; }
  }
}

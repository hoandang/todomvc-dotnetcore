using Microsoft.AspNetCore.Mvc;
using DotNetTodoList.Models;
using System.Collections.Generic;

namespace DotNetTodoList.Controllers
{
  [Route("api/[controller]")]
  public class TodoController : Controller
  {
    private readonly Todo _todo;
    public TodoController(TodoContext context)
    {
      _todo = new Todo(context);
    }
    
    [HttpGet]
    public IEnumerable<Todo> GetAll()
    {
      return _todo.GetALl();
    }

    [HttpPost]
    public IActionResult Create([FromBody] Todo item)
    {
      if (item == null) return BadRequest();

      _todo.Add(item);

      return Created($"api/todo/{item.Id}", item);
    }
  }
}

using Application.Queries.Commons;
using Client.Responses;
using Microsoft.AspNetCore.Mvc;

namespace Client.Controllers;
public class TableListController : ApiControllerBase
{

    public TableListController()
    {
    }

    [HttpGet]
    public async Task<BaseItemResponseList> GetBaseList()
    {
        var t = await Mediator.Send(new GetItemsQuery());
        return null;
    }
}


using Domain.Common;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Queries.Commons
{
    public record GetItemsQuery : IRequest<BaseItem>;
}

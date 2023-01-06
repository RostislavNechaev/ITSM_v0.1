using Application.Queries.Commons;
using AutoMapper;
using Domain.Common;
using MediatR;

namespace Application.Commands.Commons;
public class GetBaseItemsQueryHandler : IRequestHandler<GetItemsQuery, BaseItem>
{
    private readonly IMapper _mapper;

    public GetBaseItemsQueryHandler(IMapper mapper)
    {
        _mapper = mapper;
    }

    public Task<BaseItem> Handle(GetItemsQuery request, CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }
}


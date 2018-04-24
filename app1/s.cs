using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebAPI.Controllers
{
    public class BetController : ApiController
    {
        public IHttpActionResult PostBet(bet1 bet)
        {
            using (PaymentEntities1 context = new PaymentEntities1())
            {
                context.bet1.Add(bet);
                context.SaveChanges();
            }

            return Ok();
        }

        public IHttpActionResult GetAllBet()
        {
            using (PaymentEntities1 context = new PaymentEntities1())
            {
                var result = context.bet1.ToList();
                return Ok(result);

            }
        }

        public IHttpActionResult DeleteBet([FromUri] int BetId)
        {
            using (PaymentEntities1 context = new PaymentEntities1())
            {
                var result = context.bet1.Where(x=>x.BetId == BetId).FirstOrDefault(); ;
                context.bet1.Remove(result);
                context.SaveChanges();
                return Ok();
            }
        }
    }
}

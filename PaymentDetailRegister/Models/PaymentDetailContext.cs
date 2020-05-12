using Microsoft.EntityFrameworkCore;

namespace PaymentDetailRegister.Models
{
    public class PaymentDetailContext : DbContext
    {
        // En el constructor debemos pasarle que base de datos usaremos y el string de conexion. Se hace mediante el parametro DbContextOptions options
        public PaymentDetailContext(DbContextOptions<PaymentDetailContext> options) : base(options)
        { }

        public DbSet<PaymentDetail> PaymentDetails { get; set; }
    }

}

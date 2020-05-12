using System.ComponentModel.DataAnnotations;

namespace PaymentDetailRegister.Models
{
    public class PaymentDetail
    {
        [Key]
        public int PMId { get; set; }

        [Required, StringLength(100)]
        public string CardOwnerName { get; set; }

        [Required, StringLength(16)]
        public string CardNumber { get; set; }

        [Required, StringLength(5)]
        public string ExpirationDate { get; set; }

        [Required, StringLength(3)]
        public string CVV { get; set; }
    }
}

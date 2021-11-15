class ApartmentCardComponent {
  static USD_EUR = 0.88;

  constructor(props) {
    this.props = props;

    this.init();
  }

  init = () => {
    const { type, owner, roomCount, squares, address, imgSrc, price, onDelete } = this.props;
    const { amount, currency } = price;
    const { city, country, street, number } = address;
    const { fullname, email, phone } = owner;

    const finalPrice = currency === '$' ? amount * ApartmentCardComponent.USD_EUR : amount;
    const formatedPrice = Math.round(100 * finalPrice) / 100 + ' €';

    this.htmlElement = document.createElement('article');
    this.htmlElement.className = 'card shadow';
    this.htmlElement.innerHTML = `
    <img src="${imgSrc}" class="card-img-top"/ height="200px" style="object-fit: cover">
    <div class="card-body">
      <h2 class="h5">${street} ${number}, ${city} ${country}</h2>
      <ul>
        <li>
          <span>Rooms</span>:
          <strong>${roomCount}</strong>
        </li>
        <li>
          <span>Squares</span>:
          <strong>${squares}</strong>
        </li>
        <li>
          <span>Type</span>:
          <strong>${type}</strong>
        </li>
        <li>
          <span>price</span>:
          <strong>${formatedPrice}</strong>
        </li>
        <li>
          <span>Owner</span>:
          <strong>${fullname}</strong>
        </li>
         <li>
          <span>Email</span>:
          <strong>${email}</strong>
        </li>
        <li>
          <span>Phone</span>:
          <strong>${phone}</strong>
        </li>
      </ul>
      <div class="text-center">
        <button class="btn btn-danger">Ištrinti</button>
      </div>
    </div>`;
    const btn = this.htmlElement.querySelector('.btn');
    btn.addEventListener('click', onDelete);
  }
}

const bookingsContainer = document.getElementById("bookingsContainer");

const bookings = JSON.parse(localStorage.getItem("bookings")) || [];

if (bookings.length === 0) {

    bookingsContainer.innerHTML = "<h2>No bookings found.</h2>";

} else {

  bookings.forEach((booking, index) => {

        bookingsContainer.innerHTML += `

            <div class="booking-card">

                <h2>🏠 ${booking.propertyName}</h2>

                <p><strong>👤 Name:</strong> ${booking.name}</p>

                <p><strong>📞 Phone:</strong> ${booking.phone}</p>

                <p><strong>📅 Date:</strong> ${booking.date}</p>

                <p><strong>🕒 Time:</strong> ${booking.time}</p>

                <button class="deleteBookingBtn" data-index="${index}">
    🗑 Delete Booking
</button>

<hr>

            </div>

        `;

    });

}
const deleteButtons = document.querySelectorAll(".deleteBookingBtn");

deleteButtons.forEach((button) => {

    button.addEventListener("click", function () {

        const index = this.getAttribute("data-index");

        bookings.splice(index, 1);

        localStorage.setItem("bookings", JSON.stringify(bookings));

        location.reload();

    });

});
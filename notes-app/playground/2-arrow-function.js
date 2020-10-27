const event = {
        name: 'birthday party',
        guestList: ['Andrew', 'Mike', 'Jen'],
        printGuestList() {
                console.log(`guest list for ${this.name}`);

                this.guestList.forEach(guest => console.log(`${guest} is attending this ${this.name}`));
        },
};

event.printGuestList();

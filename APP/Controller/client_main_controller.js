const sidebar = document.getElementById('sidebar');
const options = document.querySelectorAll('[id="options"]');

const menuControl = document.getElementById('menu-control')

menuControl.addEventListener('click', () => {

    const targetClasses = ['bg-yellow-300', 'bg-opacity-60', 'rotate-45'];

    if (!targetClasses.every(className => menuControl.classList.contains(className))) {
        targetClasses.forEach(className => {
            menuControl.classList.add(className);
        });
    } else {
        targetClasses.forEach(className => {
            menuControl.classList.remove(className);
        });
    }

    options.forEach((option, index) => {
        if (option.classList.contains('translate-x-96')) {
            setTimeout(() => {
                option.classList.replace('translate-x-96', 'translate-x-0');
                setTimeout(() => {
                    option.classList.replace('duration-500', 'duration-100');
                }, 100)
            }, index * 100); // Menggunakan indeks untuk menghitung interval
        } else {
            setTimeout(() => {
                option.classList.replace('translate-x-0', 'translate-x-96');
                option.classList.replace('duration-100', 'duration-500');
            }, index * 100); // Menggunakan indeks untuk menghitung interval
        }
    });
});

menuControl.addEventListener('mousedown', () => {
    menuControl.classList.add('scale-[0.98]')
})

menuControl.addEventListener('mouseup', () => {
    menuControl.classList.remove('scale-[0.98]');
});

menuControl.addEventListener('touchstart', () => {
    menuControl.classList.add('scale-[0.98]')
})

menuControl.addEventListener('touchend', () => {
    menuControl.classList.remove('scale-[0.98]');
});


const sidebarControl = document.getElementById('sidebarControl').addEventListener('click', () => {
    if (sidebar.classList.contains('-translate-x-full')) {
        sidebar.classList.replace('hidden', 'fixed')
        setTimeout(() => {
            sidebar.classList.replace('-translate-x-full', 'translate-x-0')
        }, 100)
    } else {
        sidebar.classList.replace('translate-x-0', '-translate-x-full')
        setTimeout(() => {
            sidebar.classList.replace('fixed', 'hidden')
        }, 300)
    }
})

const menu = document.querySelectorAll('[id="menu"]')
const sidebarMenuItems = document.querySelectorAll('[id="sidebarMenu"]');

sidebarMenuItems.forEach(menu => {
    menu.addEventListener('click', () => {
        sidebarMenuItems.forEach(item => {
            if (item !== menu) {
                item.classList.remove('bg-[#FFDF00]/75');
            }
        });
        menu.classList.add('bg-[#FFDF00]/75');
    });
});


menu.forEach(menu => {

    menu.addEventListener('mousedown', () => {
        menu.classList.add('scale-[0.98]')
    })

    menu.addEventListener('mouseup', () => {
        menu.classList.remove('scale-[0.98]');
    });

    menu.addEventListener('touchstart', () => {
        menu.classList.add('scale-[0.98]')
    })

    menu.addEventListener('touchend', () => {
        menu.classList.remove('scale-[0.98]');
    });
})

options.forEach(option => {
    option.addEventListener('mousedown', () => {
        option.classList.add('scale-[0.95]')
    })
    
    option.addEventListener('mouseup', () => {
        option.classList.remove('scale-[0.95]');
    });
    
    option.addEventListener('touchstart', () => {
        option.classList.add('scale-[0.95]')
    })
    
    option.addEventListener('touchend', () => {
        option.classList.remove('scale-[0.95]');
    });
})

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        const ripple = document.createElement('span');
        ripple.className = 'ripple';
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        this.appendChild(ripple);
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});
// Import and invoke the ticket booth component function
import { TicketBooth } from './TicketBooth.js'
import { RideTicketHolder } from './rides/RideTicketHolders.js'
import { FoodTicketHolder } from './food/FoodTicketHolder.js'
import { GameTicketHolder } from './games/GameTicketHolder.js'
import { SideshowTicketHolder } from './sideshows/SideshowTicketHolder.js'
import { FullPackageTicketHolder } from './FullPackageTicketHolder.js'
import { TicketCount } from './TicketCount.js'

TicketBooth()
RideTicketHolder()
FoodTicketHolder()
GameTicketHolder()
SideshowTicketHolder()
FullPackageTicketHolder()
TicketCount()
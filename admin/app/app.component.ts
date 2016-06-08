import {Component} from "@angular/core";
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from "@angular/router-deprecated";
import {TicketService} from "./ticket.service";
import {TicketsComponent} from "./tickets.component";
import {DashboardComponent} from "./dashboard.component";

@Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
    <nav>
        <a [routerLink]="['Dashboard']">Dashboard</a>
        <a [routerLink]="['Tickets']">All Tickets</a>
    </nav>
    <router-outlet></router-outlet>`,
    directives: [
        ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
        TicketService
    ]
})

@RouteConfig([{
    path: '/tickets',
    name: 'Tickets',
    component: TicketsComponent
}, {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent,
    useAsDefault: true
}
])

export class AppComponent {
    title = 'Dimo Admin Panel';
}
import { Component } from '@angular/core';
import { Person } from '../../shared/interfaces/person';
import { PersonTable } from '../person-table/person-table';

@Component({
  selector: 'app-for-directive-example',
  standalone: true,
  imports: [PersonTable],
  templateUrl: './for-directive-example.html',
  styleUrl: './for-directive-example.css'
})
export class ForDirectiveExample {
  users: Person[] = [
    {
  "firstName": "Kimberley",
  "lastName": "Aynsley",
  "age": 1,
  "email": "kaynsley0@nytimes.com",
  "address": "Room 145"
}, {
  "firstName": "Augustine",
  "lastName": "De Vaar",
  "age": 2,
  "email": "adevaar1@about.me",
  "address": "Room 1719"
}, {
  "firstName": "Cody",
  "lastName": "Motte",
  "age": 3,
  "email": "cmotte2@chronoengine.com",
  "address": "Room 1087"
}, {
  "firstName": "Waly",
  "lastName": "Marde",
  "age": 4,
  "email": "wmarde3@earthlink.net",
  "address": "Suite 64"
}, {
  "firstName": "Hayden",
  "lastName": "Heaven",
  "age": 5,
  "email": "hheaven4@vkontakte.ru",
  "address": "Room 1873"
}, {
  "firstName": "Saunder",
  "lastName": "Leeburne",
  "age": 6,
  "email": "sleeburne5@google.it",
  "address": "2nd Floor"
}, {
  "firstName": "Boniface",
  "lastName": "Dutteridge",
  "age": 7,
  "email": "bdutteridge6@patch.com",
  "address": "4th Floor"
}, {
  "firstName": "Elysha",
  "lastName": "Irving",
  "age": 8,
  "email": "eirving7@feedburner.com",
  "address": "6th Floor"
}, {
  "firstName": "Becky",
  "lastName": "Tosdevin",
  "age": 9,
  "email": "btosdevin8@guardian.co.uk",
  "address": "Apt 779"
}, {
  "firstName": "Lind",
  "lastName": "Bosma",
  "age": 10,
  "email": "lbosma9@hatena.ne.jp",
  "address": "Apt 949"
}, {
  "firstName": "Kassia",
  "lastName": "Kohn",
  "age": 11,
  "email": "kkohna@themeforest.net",
  "address": "Room 946"
}, {
  "firstName": "Lauri",
  "lastName": "Molson",
  "age": 12,
  "email": "lmolsonb@creativecommons.org",
  "address": "1st Floor"
}, {
  "firstName": "Germain",
  "lastName": "Weir",
  "age": 13,
  "email": "gweirc@creativecommons.org",
  "address": "Room 731"
}, {
  "firstName": "Roderich",
  "lastName": "Andrag",
  "age": 14,
  "email": "randragd@pcworld.com",
  "address": "Room 134"
}, {
  "firstName": "Codi",
  "lastName": "L'Amie",
  "age": 15,
  "email": "clamiee@flavors.me",
  "address": "1st Floor"
}, {
  "firstName": "Marwin",
  "lastName": "Avieson",
  "age": 16,
  "email": "maviesonf@cafepress.com",
  "address": "PO Box 71783"
}, {
  "firstName": "Mab",
  "lastName": "Franciotti",
  "age": 17,
  "email": "mfranciottig@epa.gov",
  "address": "PO Box 41045"
}, {
  "firstName": "Jammie",
  "lastName": "Vowdon",
  "age": 18,
  "email": "jvowdonh@facebook.com",
  "address": "PO Box 60459"
}, {
  "firstName": "Josefa",
  "lastName": "Fullbrook",
  "age": 19,
  "email": "jfullbrooki@seesaa.net",
  "address": "PO Box 42527"
}, {
  "firstName": "Pebrook",
  "lastName": "Summersby",
  "age": 20,
  "email": "psummersbyj@clickbank.net",
  "address": "Room 668"
}
]
};
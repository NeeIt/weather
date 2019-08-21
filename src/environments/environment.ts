// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  owmApiUrl: 'http://api.openweathermap.org/data/2.5/forecast',
  owmApiID: 'ed404d8aeae66b021d7c870b082913d4', //your openweathermap API ID
  gpApiUrl: 'https://crossorigin.me/https://maps.googleapis.com/maps/api/place/autocomplete/json',
  gpApiID: '', //your google places API key
  vkAPIToken:'d6851f4742849f4bbd41cb7d29a32803ce2beb339acab7b08e4e5904dad7f2af82216742f0f2767270d54'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

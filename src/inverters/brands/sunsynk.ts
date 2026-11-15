import { InverterSettingsDto } from '../dto/inverter-settings.dto';
import { InverterModel } from '../../types';
import { localize } from '../../localize/localize';

export class Sunsynk extends InverterSettingsDto {
	brand = InverterModel.Sunsynk;
	statusGroups = {
		standby: {
			states: ['0', 'standby', 'stand-by'],
			color: 'blue',
			message: localize('common.standby'),
		},
		selftest: {
			states: ['1', 'selftest', 'self-checking'],
			color: 'yellow',
			message: localize('common.selftest'),
		},
		normal: {
			states: ['2', 'normal', 'ok'],
			color: 'green',
			message: localize('common.normal'),
		},
		alarm: {
			states: ['3', 'alarm'],
			color: 'orange',
			message: localize('common.alarm'),
		},
		fault: {
			states: ['4', 'fault'],
			color: 'red',
			message: localize('common.fault'),
		},
	};
	image =
		'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAkGBwgIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5Ojf/2wBDAQoKCg0MDRoPDxo3JR8lNzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzf/wgARCACQAGwDASIAAhEBAxEB/8QAGgABAQEAAwEAAAAAAAAAAAAAAAEGAgMFBP/EABgBAQEBAQEAAAAAAAAAAAAAAAABAgQD/9oADAMBAAIQAxAAAAHYSQ5OI5OI5SDk6flPQeej0Oz4vsrrlgAAB5mZ0+YzQl9rSZvSaz1yygAAPNzGmzOaEvtaPOaTWeuWUAAB5uY0+YzRJfb0mb0es8JZQAAHmZjUZnN42pfZ0mc0es9csoAAK83OaTO6z0W3qx7Oizuj4fbrllgAAHm5radGblJrEvl6L5vp1nrnKVFEURRFEUTnx7DhOUIoiiKIoiidvXzP/8AJhAAAAQFBAIDAQAAAAAAAAAAAAECMQMFESAyEBQwNAQzEiFBIv/aAAgBAQABBQKoqKioqKioqKioqKioIHwRFphp3cAbuAN3AEONDihLG98w6+ssyJje+YdfWWZExvfMOvrLMiY3vmHX1lmSWN75h19ZZklje+YdfWWZJY3vmHX1lmRMb3zDr0FBQS3JLG9/n+j4/wAj8lrpY3v8/wBCFUIjFaiW5JY3v8/0EPofktySxvepKVlt4I28EbeCEQ0ICWM/vkIyBvyJY35Esb8hD//EABwRAAICAgMAAAAAAAAAAAAAAAEgABECEiEwQP/aAAgBAwEBPwHrDhw4fK64m2UK3L8H/8QAHxEAAQMDBQAAAAAAAAAAAAAAAQAQIAMwMQIREhMh/9oACAECAQE/AbZYRLCJYRLDEaYB1errpbIYiQuKF/8A/8QAKhAAAQEHAQYHAAAAAAAAAAAAAQACAxEgMHGBMhASMTOCoSEiQEFQUZH/2gAIAQEABj8C9NvNmAWvstfZa+yO41GFLIkeWpZEjy1LIkeWpZEjy1LIkeWpZEjy1LIkeWpZEjylkSPKWRI3al1BRjs903YUuoLjhGP4oHT9JuwpdQXiFpK4FN2FKDQiFy2Vy2Vy2V5GQLfNf/EACIQAAIBBAEFAQEAAAAAAAAAAAABESEwMVEQIEFxofDxYf/aAAgBAQABPyFtLqS2S2S2S2S2S2S2S2S2S2S2S2O4MnY8oAfVj6sfFjzCKcGSxn6L0HFksZ+i9BxZLGfovQcWSxn6L0HBksZ+i9BwZLGfovQXBksZ+i9BcWSxU5KXdEzyKfC4MllFg1aG2uzjuSqsD5W3wZLKIrvkUJJlhPUNVNJvsfC2+DJZRK1GLCf6DShCn3Z8Lb4MliM/Uz84/KPziRquYcCJVJRKJRKJRKJRKJRKJRKI2UZLxkvCORDIZDIZDIZDIZDIZDIYrg//2gAMAwEAAgADAAAAEDDDHDDyPPPPIwq/PPPCwu/PPPAxr/OIItbY+MCgNQOCgggogtwAgkogFgAAAAABP//EABsRAAIDAQEBAAAAAAAAAAAAAAABESAxIRAw/9oACAEDAQE/EKQQ7Y8e3PbntU4QPauhdDVVAiNy/v8A/8QAHREAAQUAAwEAAAAAAAAAAAAAAQAQESAxITBRkf/aAAgBAgEBPxCkqbabFdNiumxSEXKkLk4MXDyiKUD7aISpeoIENPb/AP/EACUQAAIBAgYCAwEBAAAAAAAAAAABEVFhICExobHwEDBBcZHRgf/aAAgBAQABPxBXOal8OuL4vi+L4vh1/wCl9+l8KuHXDE22brGhnRW0mybzemgqPpYs+li362Ikt4QkonTVHIbjFHjqr4OxqzmNxinLx1VXg7mrH3G89HVVeDuas5jeejqqvB2NWchvPR1VXg7GrOQ3no6qrwdnVnIbz0dVV4OzqzmN5hnykBatW7JEJjok/wCGQ2nktXDy2GyiUU6Sn/BYcpy1NfbOQ3no6l2P+0JVmzJXJaTQ8nT7RJCmRxMZTSfHDQ+zeE4H57F2PKWTg0U0zHpjle8uWfyOHGbBkoPR+LxA5DeejoXZHkaNEmIucQqs2OLWW5M5oSS2mnoByG89Di9Wm1yssF3X+P30ExU5BliTUvFwuFwvFwuFwuFwuFwXi1NPNFZ8+JM6mdfMupLqS6+JdT/TkN57eQayPktFotFotFotFotFotFoQ0vU/9k=';
}

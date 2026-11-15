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
		'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAA4KCw0LCQ4NDA0QDw4RFiQXFhQUFiwgIRokNC43NjMuMjI6QVNGOj1OPjIySGJJTlZYXV5dOEVmbWVabFNbXVn/2wBDAQ8QEBYTFioXFypZOzI7WVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVn/wAARCABsAFEDASIAAhEBAxEB/8QAGgABAAMBAQEAAAAAAAAAAAAAAAECBgMFBP/EADAQAAIBAQYEAwgDAQAAAAAAAAABAhEDBAYSMlEhMTTBBXFzExQWQmGTstEzUnKS/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAECA//EABsRAQEBAAMBAQAAAAAAAAAAAAABEQIDMSES/9oADAMBAAIRAxEAPwDfSk1LmVzy3E9TKgWzy3GeW5UAWzy3GeW5UkCc8txnlueLiDxK8eHq7+75F7TNXNGvKh4vxJ4h/ax+2TVxtM8tyVN1XExXxJ4hvY/bPf8AAL/bX+7TtLxlzRtMqyqnCiGmPbr9WCoKjnPUypaeplQAAAkgADN4v5XTzl2M0aXF3K6ecuxmTFaiTWYR6K29XsjJmswj0Vt6vZFhWkBANMuc9TKlp6mVAAAAAAM3i/ldPOfYzJpsX8rp5z7GZM1qJNZhHorb1eyMka3CPRW3q9kJ6VowAaZc56mVLT1MqAAAAAFGbxfyunnLsZk0+LdN14V19jNukaZ403MZbfka2RQ1uEeitvV7IynBqqijWYT6K19Vfii5ZfsLl8aIAFZc56mVJnqZBQABAABRnMW8I3V/67GfvE4znD+OT+Z8aGkxRd7a3jd/ZWU7SmauWLdOR4CuN6pT3O1fClckv0a6+69VuTU5cJyfKlZ1cIxopfPLmvI1mE+jtfUX4ozsrjemmlc7RVfNQl+jTYYsbWwulorWznZt2iopKleCL2d17bNmYceH5nr3gAc1c56mVEklJ/siiAkEUQogJBFEKICQRRCiAklakVoiUlVAdgU9nHeX/TAFZ6mQdJJZnwIotgKAvRbCi2AoC9FsRRbAVBei2FFsBQLmi9FsElVcAL1BbKvqAP/Z';
}

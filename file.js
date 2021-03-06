
import { Permissions } from '@/lib/permissions'


class User {

  constructor(details, traits = {}) {
    const { firstname, lastname } = details
    this.firstname = firstname
    this.lastname = lastname
    this.traits = traits

    this.sessionStartedAt = Date.now()
  }

 
  get name() {
    return `${this.firstname} ${this.lastname}`
  }


  get isAdmin() {
    return Permissions.granted(this, 'admin')
  }

  get currentSessionIsValid() {
    const tenMinutesInMiliseconds = 600000
    return (this.sessionStartedAt + tenMinutesInMiliseconds) <= Date.now()
  }

  extendSession() {
    this.sessionStartedAt = Date.now()
  }
}
const article = title => ({
    title: title
})

class member {
    constructor(name) {
        this._name = name
    }

    notify(article) {
        console.log(this._name, ',', article.title)
    }
}

class Membership {
    constructor() {
        this._subscribers = []
    }

    subscribe(member) {
        this._subscribers.push(member)
    }

    sendArticles(articles) {
        this._subscribers.forEach(subscriber => {
            subscriber.notify(articles)
        })
    }
}

const Dimash = new member('Dimash')
const Baurzhan = new member('Baurzhan')

const membership = new Membership()
membership.subscribe(Dimash)
membership.subscribe(Baurzhan)
membership.sendArticles(article('Laughing is good for the heart and can increase blood flow by 20 percent. '))
membership.sendArticles(article('Your skin works hard. Not only is it the largest organ in the body, but it regulates your temperature and defends against disease and infection. '))
membership.sendArticles(article('Always look on the bright side: being an optimist can help you live longer. '))



const notification = title => ({
    title: title
})

class Member {
    constructor(name) {
        this._name = name
    }

    notify(notification) {
        console.log(this._name, ',', notification.title)
    }
}

class MembershipNotifications {
    constructor() {
        this._subscribers = []
    }

    subscribe(Member) {
        this._subscribers.push(Member)
    }

    sendnotifications(notifications) {
        this._subscribers.forEach(subscriber => {
            subscriber.notify(notifications)
        })
    }
}

const Adil = new Member('Adil')
const BaurzhanBilal = new Member('BaurzhanBilal')

const MembershipNot = new MembershipNotifications()
MembershipNot.subscribe(Adil)
MembershipNot.subscribe(BaurzhanBilal)
MembershipNot.sendnotifications(notification('Don`t forget about training today at 8 o`clock in the morning! '))


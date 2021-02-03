const message = {
    places: ['a movie theater', 'a local park', 'a national park', 'your parent\'s house', 'their parent\'s house', 'an abandoned mine', 'an active mine', 'a skate park', 'the fey wild', 'the forgotten realms', 'somewhere quiet', 'the library', 'the zoo'],
    activities: ['do some yoga together', 'watch a movie together', 'silently scroll through your phones while holding hands', 'have loud sex', 'each read a book in a language you don\'t understand', 'create a business', 'invest in the stock market', 'have a picnic', 'look for treasure', 'write a play', 'adopt a dog'],
    endingIdeas: ['kiss them on the cheek', 'block them on social media', 'propose', 'ask them what their name is "because you forgot and were embarassed"', 'burst into tears and run away', 'tell them you had a good time but you\'re not really feeling a connection'],
    randPlace() {
        let randIndex = Math.floor(Math.random() * (this.places.length - 1));
        return this.places[randIndex]
    },
    randActivity() {
        let randIndex = Math.floor(Math.random() * (this.activities.length - 1));
        return this.activities[randIndex]
    },
    randEnding() {
        let randIndex = Math.floor(Math.random() * (this.endingIdeas.length - 1));
        return this.endingIdeas[randIndex]
    }
};

console.log(`Looking for a great first date idea? Look no further!`)
console.log(`You should take them to ${message.randPlace()} and ${message.randActivity()}. When you're finished don't forget to ${message.randEnding()}! Guaranteed they will never forget.`)

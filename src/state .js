// tickle watch 

const root = document.createElement(document.getElementById('root'))

export default function Tick() {
    const element = (
        <div>
            <h3>it's {new Date().toLocaleTimeString()}</h3>
        </div>
    ) ;
    root.render(element)
}

// props


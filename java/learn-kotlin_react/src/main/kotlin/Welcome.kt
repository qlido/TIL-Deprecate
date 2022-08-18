import csstype.px
import csstype.rgb
//import kotlinx.css.*
import react.FC
import react.Props
import react.css.css
import react.dom.html.InputType
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.input
import react.useState
//import styled.StyleSheet

external interface WelcomeProps : Props {
    var name: String
    var pass: String
}

//object ComponentStyles : StyleSheet("ComponentStyles") {
//    val test by css{
//        backgroundColor = Color.red
//
//    }
//}


val Welcome = FC<WelcomeProps> { props ->
    var name by useState(props.name)
    var pass by useState(props.pass)
    div {
        css {
            padding = 5.px
            backgroundColor = rgb(8, 97, 22)
            color = rgb(56, 246, 137)
        }
        +"id: $name\n password: $pass"
    }
    input {
        css {
            marginTop = 5.px
            marginBottom = 5.px
            fontSize = 14.px
            fontSize = 14.px
//            ComponentStyles.test
        }
        type = InputType.text
        value = name
        onChange = { event ->
            name = event.target.value
        }
    }
    input {
        type = InputType.password
        value = pass
        onChange = { event ->
            pass = event.target.value
        }
    }
}

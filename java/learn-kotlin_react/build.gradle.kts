plugins {
    kotlin("js") version "1.7.10"
}

group = "me.user"
version = "1.0-SNAPSHOT"

repositories {
    mavenCentral()
}

dependencies {
    testImplementation(kotlin("test"))
    implementation("org.jetbrains.kotlin-wrappers:kotlin-react:17.0.2-pre.290-kotlin-1.6.10")
    implementation("org.jetbrains.kotlin-wrappers:kotlin-react-dom:17.0.2-pre.290-kotlin-1.6.10")
    implementation("org.jetbrains.kotlin-wrappers:kotlin-react-css:17.0.2-pre.290-kotlin-1.6.10")
//    implementation("org.jetbrains.kotlin-wrappers:kotlin-styled:5.3.5-pre.369")
    implementation("org.jetbrains.kotlin-wrappers:kotlin-emotion:0.9.3-pre.369")
    //implementation("org.jetbrains.kotlin-wrappers:kotlin-styled-next:1.2.1-pre.369")
}

kotlin {
    js(IR) {
        binaries.executable()
        browser {
            commonWebpackConfig {
                cssSupport.enabled = true
            }
        }
    }
}
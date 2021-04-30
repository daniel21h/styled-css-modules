import styles from './responsive.module.css'
import { Container } from "./styles";

export function HelloWorld() {
  return (
    <Container className={styles.container}>
      <h1>Hello World</h1>
    </Container>
  )
}
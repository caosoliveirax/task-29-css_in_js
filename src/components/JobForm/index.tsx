import { FormEvent, useState } from 'react'
import { ButtonSearch, InputSearch, JobsSearch } from './styles'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormSearch = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <JobsSearch onSubmit={aoEnviarForm}>
      <InputSearch
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <ButtonSearch type="submit">Pesquisar</ButtonSearch>
    </JobsSearch>
  )
}
export default FormSearch

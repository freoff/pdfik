import { MouseEvent } from 'react'
import { linkFile } from '../../utils/link-file'
import s from './view1.module.css'
export interface View1Props {}

export const View1: React.VFC<View1Props> = () => {
  const handler = (event: MouseEvent<HTMLAnchorElement>) => {
    // for chrome only else return true
    event.preventDefault()
    const url = (event.target as HTMLAnchorElement).href
    linkFile(url)
  }
  return (
    <div className={s.container}>
      <a onClick={handler} href={'/client/ddd.pdf'}>
        'Get file'
      </a>
    </div>
  )
}

import React, {useReducer} from 'react'
import {ContextInitial} from './_context/initial'
import {TemplateReducer} from './_context/reducer'

const [TemplateCntxt, TemplateCntxtDispatch] = useReducer(TemplateReducer, ContextInitial)

export const TemplateComponent = () => <>can use the reducer from here or create a context for nested components</>
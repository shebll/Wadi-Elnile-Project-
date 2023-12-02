"use client"
import config from "@/sanity.config"
import {NextStudio} from "next-sanity/studio"

function AminPage() {
  return (
    <NextStudio config={config} />
  )
}

export default AminPage

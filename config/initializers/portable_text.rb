PortableText.config.block.types.merge! do
  { hero: HeroBlock }
end

PortableText::Html.config.block.types.merge! do
  { hero: Html::HeroBlock }
end

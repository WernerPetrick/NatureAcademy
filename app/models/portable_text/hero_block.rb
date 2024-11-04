class HeroBlock < PortableText::BlockTypes::Base
  option :title, default: proc { "" }
  option :is_headline_one, default: proc { false }
  option :rich_text, default: proc { [] }
  option :image, default: proc { "" }
end

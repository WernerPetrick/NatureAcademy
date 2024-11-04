

class PagesController < ApplicationController
  
  BASE_URL = "https://#{ENV['SANITY_PROJECT_ID']}.api.sanity.io/v#{ENV['SANITY_API_VERSION']}/data/query/#{ENV['SANITY_DATASET']}"
  SANITY_TOKEN = ENV['SANITY_TOKEN'] 
  
  def home
    query = '*[_type == "pageBuilder" && title == "HomePage"]'
    page_data = fetch(query)
    
    @page_content = page_data['result'].first['content']
    
    document = Sanity::Document.find(id: "9f3efb35-452a-466c-ad61-9eae901b2daf")
    
    puts "This is document: #{document}"
    # portable_text = PortableText::Serializer.new(content: @page_content, to: :html)
    

    
    # html_output = portable_text.render.call
    
    # puts "This is portable_text: #{html_output}"
  
    # render html: html_output.html_safe
  end
  

  private

  def fetch(query, params = {})
    if params.any?
      params.each do |key, value|
        query = query.gsub("$#{key}", value.to_s)
      end
    end
    
    encoded_query = URI.encode_www_form_component(query)
    response = HTTP.get("#{BASE_URL}?query=#{encoded_query}")
    JSON.parse(response.body.to_s)
  rescue HTTP::Error => e
    Rails.logger.error("Sanity API error: #{e.message}")
    Rails.logger.info("SANITY_PROJECT_ID: #{ENV['SANITY_PROJECT_ID']}")
    Rails.logger.info("SANITY_API_VERSION: #{ENV['SANITY_API_VERSION']}")
    Rails.logger.info("SANITY_DATASET: #{ENV['SANITY_DATASET']}")
    nil
  end
  
end

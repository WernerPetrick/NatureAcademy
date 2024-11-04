class ApplicationController < ActionController::Base
  before_action :fetch_navbar

  private

  def fetch_navbar
    query = '*[_type == "navigation" && _id =="f521847e-3a6b-4d6c-8ad6-a3f6dd2897ba"]'
    navbar_data = fetch_from_sanity(query)
    
    @navbar_content = navbar_data['result'].first
  end

  def fetch_from_sanity(query)
    base_url = "https://#{ENV['SANITY_PROJECT_ID']}.api.sanity.io/v#{ENV['SANITY_API_VERSION']}/data/query/#{ENV['SANITY_DATASET']}"
    response = HTTP.get("#{base_url}?query=#{URI.encode_www_form_component(query)}")
    JSON.parse(response.body.to_s)
  rescue HTTP::Error => e
    Rails.logger.error("Error fetching from Sanity: #{e.message}")
    nil
  end
end

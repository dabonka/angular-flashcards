require 'rubygems'
require 'sinatra'
require 'sinatra/cross_origin'
require 'json'

configure do
  enable :cross_origin
end

set :allow_origin, :any
set :allow_methods, [:get, :post, :options]
set :allow_credentials, true
set :max_age, "1728000"
set :expose_headers, ['Content-Type']

get "/api/v1/cards.json" do 
  content_type :json
  card = [
    {card_id: 1, original_text: "Cat"},
    {card_id: 2, original_text: "Dog"},
    {card_id: 3, original_text: "Cow"},
    {card_id: 4, original_text: "Pig"}
  ].sample
  {data: card}.to_json
end

options "/api/v1/cards/compare.json" do 
end

post "/api/v1/cards/compare.json" do 
  content_type :json
  {status: "success"}.to_json
end

OmniAuth.config.logger = Rails.logger

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :google_oauth2,
          '645953320031-9iv8qqk8cdmcsj9i9dkrdpi3tnk32nc2.apps.googleusercontent.com',
          't3z2b9QWn-VWWrVhVtBdyz5C',
          {client_options: {ssl: {ca_file: Rails.root.join("cacert.pem").to_s}}}
end

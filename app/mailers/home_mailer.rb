class HomeMailer < ActionMailer::Base
  default from: "saraochdavid@brollop.se"
  
  def send_registration_email( attendance )
    @attendance = attendance

    mail( :to => 'david@nocweb.se', :subject => 'Anmälan till bröllop' )
  end
end

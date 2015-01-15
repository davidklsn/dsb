class HomeMailer < ActionMailer::Base
  default from: "from@example.com"
  
  def send_registration_email( attendance )
    @attendance = attendance

    mail( :to => 'david@nocweb.se', :subject => 'Anmälan till bröllop' )
  end
end

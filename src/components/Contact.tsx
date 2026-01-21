import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Send, Github, Linkedin, AlertCircle, Calendar } from "lucide-react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    } else if (formData.subject.trim().length < 5) {
      newErrors.subject = 'Subject must be at least 5 characters';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error !== '');
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));

    if (errors[field as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Note: You should update these IDs with your own from EmailJS dashboard
      const serviceId = 'service_by02npx'; 
      const templateId = 'template_tc1o5jg'; 
      const publicKey = 'sgwQpL4fFA3dU8WQL'; 

      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'siddhudash21@gmail.com' // Your professional email
        },
        publicKey
      );

      console.log('Email sent successfully:', result);
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => setSubmitStatus(''), 5000);
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(''), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Currently seeking Data Science and ML internship opportunities. Let's discuss how I can contribute to your team.
        </p>

        <Card className="p-8 bg-card border-border">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Side - Contact Information */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a 
                      href="mailto:siddhudash21@gmail.com"
                      className="text-foreground hover:text-primary transition-colors font-semibold"
                    >
                      siddhudash21@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="text-foreground font-semibold">Kattankulathur, Tamil Nadu, India</p>
                  </div>
                </div>
              </div>

              {/* Follow Me Section */}
              <div>
                <h4 className="text-lg font-semibold mb-4 text-foreground">Social Profiles</h4>
                <div className="space-y-3">
                  <a 
                    href="https://github.com/siddhivdash"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                  >
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Github className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm font-medium">GitHub</span>
                  </a>

                  <a 
                    href="https://www.linkedin.com/in/siddhi-v-dash"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                  >
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Linkedin className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm font-medium">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Send Message</h3>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                  <p className="text-green-600 text-sm font-medium">
                    ✓ Message sent successfully! I'll get back to you soon.
                  </p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                  <p className="text-red-600 text-sm font-medium">
                    ✗ Failed to send message. Please try again or contact me directly.
                  </p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Name <span className="text-primary">*</span>
                    </label>
                    <Input 
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Your full name"
                      className={`bg-background border-border ${
                        errors.name ? 'border-red-500 focus:border-red-500' : ''
                      }`}
                      disabled={isSubmitting}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Email <span className="text-primary">*</span>
                    </label>
                    <Input 
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="your.email@example.com"
                      className={`bg-background border-border ${
                        errors.email ? 'border-red-500 focus:border-red-500' : ''
                      }`}
                      disabled={isSubmitting}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Subject <span className="text-primary">*</span>
                  </label>
                  <Input 
                    value={formData.subject}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                    placeholder="Internship opportunity, Project collaboration, etc."
                    className={`bg-background border-border ${
                      errors.subject ? 'border-red-500 focus:border-red-500' : ''
                    }`}
                    disabled={isSubmitting}
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" />
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Message <span className="text-primary">*</span>
                  </label>
                  <Textarea 
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Tell me about the role, your project requirements, or just say hello..."
                    rows={6}
                    className={`bg-background border-border resize-none ${
                      errors.message ? 'border-red-500 focus:border-red-500' : ''
                    }`}
                    disabled={isSubmitting}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" />
                      {errors.message}
                    </p>
                  )}
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full glow-effect" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="mr-2 h-5 w-5 animate-spin rounded-full border-2 border-background border-t-transparent" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
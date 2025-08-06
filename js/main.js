// Main JavaScript functionality for pawabloX Design System

class PawaBloXApp {
    constructor() {
        this.init();
    }

    init() {
        this.setupSidebar();
        this.setupTabs();
        this.setupCopyButtons();
        this.setupColorSwatches();
        this.setupFormComponents();
        this.highlightCurrentPage();
    }

    // Sidebar functionality
    setupSidebar() {
        const sidebarToggle = document.getElementById('sidebarToggle');
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('overlay');

        // Toggle sidebar on mobile
        if (sidebarToggle) {
            sidebarToggle.addEventListener('click', () => {
                sidebar.classList.toggle('open');
                overlay.classList.toggle('active');
            });
        }

        // Close sidebar when clicking overlay
        if (overlay) {
            overlay.addEventListener('click', () => {
                sidebar.classList.remove('open');
                overlay.classList.remove('active');
            });
        }

        // Setup collapsible nav groups
        const navGroupHeaders = document.querySelectorAll('.nav-group-header');
        navGroupHeaders.forEach(header => {
            header.addEventListener('click', () => {
                const navGroup = header.parentElement;
                navGroup.classList.toggle('open');
            });
        });

        // Open nav groups by default on desktop
        if (window.innerWidth > 768) {
            document.querySelectorAll('.nav-group').forEach(group => {
                group.classList.add('open');
            });
        }
    }

    // Tab functionality
    setupTabs() {
        const tabButtons = document.querySelectorAll('.tab-button');
        const tabContents = document.querySelectorAll('.tab-content');

        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                const targetTab = button.getAttribute('data-tab');

                // Remove active class from all buttons and contents
                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));

                // Add active class to clicked button and corresponding content
                button.classList.add('active');
                const targetContent = document.getElementById(targetTab);
                if (targetContent) {
                    targetContent.classList.add('active');
                }
            });
        });

        // Activate first tab by default
        if (tabButtons.length > 0) {
            tabButtons[0].click();
        }
    }

    // Copy to clipboard functionality
    setupCopyButtons() {
        const copyButtons = document.querySelectorAll('.copy-btn');
        
        copyButtons.forEach(button => {
            button.addEventListener('click', async () => {
                const textToCopy = button.getAttribute('data-copy');
                
                try {
                    await navigator.clipboard.writeText(textToCopy);
                    this.showCopyFeedback(button);
                } catch (err) {
                    // Fallback for older browsers
                    this.fallbackCopyTextToClipboard(textToCopy, button);
                }
            });
        });
    }

    // Show copy feedback
    showCopyFeedback(button) {
        const originalIcon = button.innerHTML;
        button.innerHTML = '<i class="fas fa-check"></i>';
        button.classList.add('copied');

        setTimeout(() => {
            button.innerHTML = originalIcon;
            button.classList.remove('copied');
        }, 2000);

        // Show toast notification
        this.showToast('Copied to clipboard!');
    }

    // Fallback copy method
    fallbackCopyTextToClipboard(text, button) {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        try {
            document.execCommand('copy');
            this.showCopyFeedback(button);
        } catch (err) {
            console.error('Fallback: Oops, unable to copy', err);
        }

        document.body.removeChild(textArea);
    }

    // Color swatch functionality
    setupColorSwatches() {
        const colorSwatches = document.querySelectorAll('.color-swatch');
        
        colorSwatches.forEach(swatch => {
            swatch.addEventListener('click', () => {
                const colorValue = swatch.querySelector('.color-value').textContent;
                
                navigator.clipboard.writeText(colorValue).then(() => {
                    this.showToast(`Copied ${colorValue} to clipboard!`);
                }).catch(err => {
                    console.error('Could not copy color: ', err);
                });
            });
        });
    }

    // Form component functionality
    setupFormComponents() {
        // Checkbox functionality
        const checkboxes = document.querySelectorAll('.checkbox');
        checkboxes.forEach(checkbox => {
            const input = checkbox.querySelector('.checkbox-input');
            checkbox.addEventListener('click', (e) => {
                if (e.target !== input) {
                    input.checked = !input.checked;
                    input.dispatchEvent(new Event('change'));
                }
            });
        });

        // Radio button functionality
        const radios = document.querySelectorAll('.radio');
        radios.forEach(radio => {
            const input = radio.querySelector('.radio-input');
            radio.addEventListener('click', (e) => {
                if (e.target !== input) {
                    input.checked = true;
                    input.dispatchEvent(new Event('change'));
                }
            });
        });

        // Form validation
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
            form.addEventListener('submit', (e) => {
                if (!this.validateForm(form)) {
                    e.preventDefault();
                }
            });
        });
    }

    // Form validation
    validateForm(form) {
        let isValid = true;
        const requiredFields = form.querySelectorAll('[required]');
        
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                this.showFieldError(field, 'This field is required');
                isValid = false;
            } else {
                this.clearFieldError(field);
            }
        });

        return isValid;
    }

    // Show field error
    showFieldError(field, message) {
        this.clearFieldError(field);
        
        const errorElement = document.createElement('div');
        errorElement.className = 'field-error';
        errorElement.textContent = message;
        errorElement.style.color = 'var(--pw-red-600)';
        errorElement.style.fontSize = 'var(--font-size-xs)';
        errorElement.style.marginTop = 'var(--spacing-1)';
        
        field.parentNode.appendChild(errorElement);
        field.style.borderColor = 'var(--pw-red-500)';
    }

    // Clear field error
    clearFieldError(field) {
        const existingError = field.parentNode.querySelector('.field-error');
        if (existingError) {
            existingError.remove();
        }
        field.style.borderColor = '';
    }

    // Highlight current page in navigation
    highlightCurrentPage() {
        const currentPath = window.location.pathname;
        const navLinks = document.querySelectorAll('.nav-menu a, .nav-submenu a');
        
        navLinks.forEach(link => {
            const linkPath = new URL(link.href).pathname;
            if (linkPath === currentPath) {
                link.classList.add('active');
                
                // Open parent nav group if it's a submenu item
                const navGroup = link.closest('.nav-group');
                if (navGroup) {
                    navGroup.classList.add('open');
                }
            }
        });
    }

    // Toast notification
    showToast(message, type = 'success') {
        // Remove existing toast
        const existingToast = document.querySelector('.toast');
        if (existingToast) {
            existingToast.remove();
        }

        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.textContent = message;
        
        // Toast styles
        Object.assign(toast.style, {
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            backgroundColor: type === 'success' ? 'var(--pw-green-600)' : 'var(--pw-orange-600)',
            color: 'white',
            padding: 'var(--spacing-3) var(--spacing-4)',
            borderRadius: 'var(--radius-lg)',
            boxShadow: 'var(--shadow-lg)',
            zIndex: '9999',
            fontSize: 'var(--font-size-sm)',
            fontWeight: '500',
            transform: 'translateY(100px)',
            transition: 'transform 0.3s ease'
        });

        document.body.appendChild(toast);

        // Animate in
        setTimeout(() => {
            toast.style.transform = 'translateY(0)';
        }, 100);

        // Remove after 3 seconds
        setTimeout(() => {
            toast.style.transform = 'translateY(100px)';
            setTimeout(() => {
                if (toast.parentNode) {
                    toast.parentNode.removeChild(toast);
                }
            }, 300);
        }, 3000);
    }

    // Utility method to create component examples
    createComponentExample(type, config = {}) {
        const examples = {
            button: () => this.createButtonExample(config),
            badge: () => this.createBadgeExample(config),
            checkbox: () => this.createCheckboxExample(config),
            radio: () => this.createRadioExample(config),
            input: () => this.createInputExample(config),
            alert: () => this.createAlertExample(config)
        };

        return examples[type] ? examples[type]() : null;
    }

    createButtonExample(config) {
        const button = document.createElement('button');
        button.className = `btn ${config.variant || 'btn-primary'} ${config.size || ''}`;
        button.textContent = config.text || 'Button';
        
        if (config.icon) {
            const icon = document.createElement('i');
            icon.className = config.icon;
            button.insertBefore(icon, button.firstChild);
        }

        if (config.disabled) {
            button.disabled = true;
        }

        if (config.loading) {
            button.classList.add('loading');
        }

        return button;
    }

    createBadgeExample(config) {
        const badge = document.createElement('span');
        badge.className = `badge ${config.variant || 'badge-primary'}`;
        badge.textContent = config.text || 'Badge';
        
        if (config.icon) {
            const icon = document.createElement('i');
            icon.className = config.icon;
            badge.insertBefore(icon, badge.firstChild);
        }

        return badge;
    }

    createCheckboxExample(config) {
        const wrapper = document.createElement('div');
        wrapper.className = 'checkbox';
        
        const input = document.createElement('input');
        input.type = 'checkbox';
        input.className = 'checkbox-input';
        input.id = config.id || 'checkbox-' + Math.random().toString(36).substr(2, 9);
        
        const labelWrapper = document.createElement('div');
        labelWrapper.className = 'checkbox-content';
        
        const label = document.createElement('label');
        label.className = 'checkbox-label';
        label.htmlFor = input.id;
        label.textContent = config.label || 'Checkbox Label';
        
        labelWrapper.appendChild(label);
        
        if (config.description) {
            const description = document.createElement('div');
            description.className = 'checkbox-description';
            description.textContent = config.description;
            labelWrapper.appendChild(description);
        }
        
        wrapper.appendChild(input);
        wrapper.appendChild(labelWrapper);
        
        return wrapper;
    }

    createRadioExample(config) {
        const wrapper = document.createElement('div');
        wrapper.className = 'radio';
        
        const input = document.createElement('input');
        input.type = 'radio';
        input.className = 'radio-input';
        input.name = config.name || 'radio-group';
        input.id = config.id || 'radio-' + Math.random().toString(36).substr(2, 9);
        
        const labelWrapper = document.createElement('div');
        labelWrapper.className = 'radio-content';
        
        const label = document.createElement('label');
        label.className = 'radio-label';
        label.htmlFor = input.id;
        label.textContent = config.label || 'Radio Label';
        
        labelWrapper.appendChild(label);
        
        if (config.description) {
            const description = document.createElement('div');
            description.className = 'radio-description';
            description.textContent = config.description;
            labelWrapper.appendChild(description);
        }
        
        wrapper.appendChild(input);
        wrapper.appendChild(labelWrapper);
        
        return wrapper;
    }

    createInputExample(config) {
        const wrapper = document.createElement('div');
        wrapper.className = 'form-group';
        
        if (config.label) {
            const label = document.createElement('label');
            label.className = 'form-label';
            label.textContent = config.label;
            wrapper.appendChild(label);
        }
        
        const input = document.createElement('input');
        input.className = 'form-input';
        input.type = config.type || 'text';
        input.placeholder = config.placeholder || '';
        
        if (config.disabled) {
            input.disabled = true;
        }
        
        wrapper.appendChild(input);
        
        return wrapper;
    }

    createAlertExample(config) {
        const alert = document.createElement('div');
        alert.className = `alert ${config.variant || 'alert-info'}`;
        alert.textContent = config.message || 'This is an alert message.';
        
        return alert;
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new PawaBloXApp();
});

// Handle window resize
window.addEventListener('resize', () => {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    
    if (window.innerWidth > 768) {
        sidebar.classList.remove('open');
        overlay.classList.remove('active');
        
        // Open nav groups on desktop
        document.querySelectorAll('.nav-group').forEach(group => {
            group.classList.add('open');
        });
    }
});

// Export for use in other scripts
window.PawaBloXApp = PawaBloXApp;

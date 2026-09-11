import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { LanguageProvider, Header, use_language } from '../components/header.tsx';

// Reset cookies between tests
afterEach(() => {
    document.cookie = 'lang=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
});

describe('LanguageProvider + Header', () => {
    test('defaults to "gr" when no cookie is set', () => {
        render(
            <LanguageProvider>
                <Header />
            </LanguageProvider>
        );
        const grButton = screen.getByAltText('EL').closest('button');
        expect(grButton).toHaveClass('gr nownohover');
    });

    test('switches language and sets cookie when eng flag clicked', () => {
        render(
            <LanguageProvider>
                <Header />
            </LanguageProvider>
        );

        const engButton = screen.getByAltText('ENG').closest('button')!;
        fireEvent.click(engButton);

        expect(document.cookie).toContain('lang=eng');
        expect(engButton).toHaveClass('eng nownohover');
    });

    test('use_language throws when used outside LanguageProvider', () => {
  
        const spy = jest.spyOn(console, 'error').mockImplementation(() => { });

        const BrokenComponent = () => {
            use_language();
            return null;
        };

        expect(() => render(<BrokenComponent />)).toThrow(
            'useLanguage must be used within a LanguageProvider'
        );

        spy.mockRestore();
    });
});
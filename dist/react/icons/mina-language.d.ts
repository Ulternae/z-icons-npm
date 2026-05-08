import React from 'react';

export interface MinaLanguageProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLanguage: React.FC<MinaLanguageProps>;
export default MinaLanguage;

import React from 'react';

export interface NeoLanguageProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoLanguage: React.FC<NeoLanguageProps>;
export default NeoLanguage;

import React from 'react';

export interface LanLanguageProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLanguage: React.FC<LanLanguageProps>;
export default LanLanguage;

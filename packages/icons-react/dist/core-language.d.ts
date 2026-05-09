import React from 'react';

export interface CoreLanguageProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreLanguage: React.FC<CoreLanguageProps>;
export default CoreLanguage;

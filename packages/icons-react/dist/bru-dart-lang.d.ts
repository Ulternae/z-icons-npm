import React from 'react';

export interface BruDartLangProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruDartLang: React.FC<BruDartLangProps>;
export default BruDartLang;

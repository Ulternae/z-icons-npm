import React from 'react';

export interface LanLanguageRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLanguageRegular: React.FC<LanLanguageRegularProps>;
export default LanLanguageRegular;

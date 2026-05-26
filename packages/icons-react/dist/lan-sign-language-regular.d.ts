import React from 'react';

export interface LanSignLanguageRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSignLanguageRegular: React.FC<LanSignLanguageRegularProps>;
export default LanSignLanguageRegular;

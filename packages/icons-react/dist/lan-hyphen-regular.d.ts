import React from 'react';

export interface LanHyphenRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHyphenRegular: React.FC<LanHyphenRegularProps>;
export default LanHyphenRegular;

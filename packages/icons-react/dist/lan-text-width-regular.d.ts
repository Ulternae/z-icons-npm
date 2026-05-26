import React from 'react';

export interface LanTextWidthRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTextWidthRegular: React.FC<LanTextWidthRegularProps>;
export default LanTextWidthRegular;

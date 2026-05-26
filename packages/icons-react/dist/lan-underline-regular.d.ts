import React from 'react';

export interface LanUnderlineRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUnderlineRegular: React.FC<LanUnderlineRegularProps>;
export default LanUnderlineRegular;

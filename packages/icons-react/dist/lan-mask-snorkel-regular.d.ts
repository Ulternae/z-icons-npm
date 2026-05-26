import React from 'react';

export interface LanMaskSnorkelRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMaskSnorkelRegular: React.FC<LanMaskSnorkelRegularProps>;
export default LanMaskSnorkelRegular;

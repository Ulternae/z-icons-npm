import React from 'react';

export interface LanSaxophoneRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSaxophoneRegular: React.FC<LanSaxophoneRegularProps>;
export default LanSaxophoneRegular;

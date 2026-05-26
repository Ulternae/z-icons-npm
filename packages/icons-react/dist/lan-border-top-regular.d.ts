import React from 'react';

export interface LanBorderTopRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBorderTopRegular: React.FC<LanBorderTopRegularProps>;
export default LanBorderTopRegular;

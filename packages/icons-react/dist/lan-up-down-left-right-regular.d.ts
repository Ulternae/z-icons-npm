import React from 'react';

export interface LanUpDownLeftRightRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUpDownLeftRightRegular: React.FC<LanUpDownLeftRightRegularProps>;
export default LanUpDownLeftRightRegular;

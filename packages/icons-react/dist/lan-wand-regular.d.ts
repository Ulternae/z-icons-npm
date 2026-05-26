import React from 'react';

export interface LanWandRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWandRegular: React.FC<LanWandRegularProps>;
export default LanWandRegular;

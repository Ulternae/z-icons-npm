import React from 'react';

export interface LanMakiRollRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMakiRollRegular: React.FC<LanMakiRollRegularProps>;
export default LanMakiRollRegular;

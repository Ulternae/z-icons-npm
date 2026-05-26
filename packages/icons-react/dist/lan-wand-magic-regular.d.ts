import React from 'react';

export interface LanWandMagicRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWandMagicRegular: React.FC<LanWandMagicRegularProps>;
export default LanWandMagicRegular;

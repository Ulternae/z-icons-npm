import React from 'react';

export interface LanFootWingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFootWingRegular: React.FC<LanFootWingRegularProps>;
export default LanFootWingRegular;

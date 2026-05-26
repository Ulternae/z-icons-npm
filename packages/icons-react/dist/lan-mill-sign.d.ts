import React from 'react';

export interface LanMillSignProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMillSign: React.FC<LanMillSignProps>;
export default LanMillSign;

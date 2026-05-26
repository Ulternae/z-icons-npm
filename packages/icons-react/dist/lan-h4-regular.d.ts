import React from 'react';

export interface LanH4RegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanH4Regular: React.FC<LanH4RegularProps>;
export default LanH4Regular;

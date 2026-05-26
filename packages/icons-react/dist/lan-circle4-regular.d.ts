import React from 'react';

export interface LanCircle4RegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircle4Regular: React.FC<LanCircle4RegularProps>;
export default LanCircle4Regular;

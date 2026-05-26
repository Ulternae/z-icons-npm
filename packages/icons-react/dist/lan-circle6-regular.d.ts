import React from 'react';

export interface LanCircle6RegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircle6Regular: React.FC<LanCircle6RegularProps>;
export default LanCircle6Regular;

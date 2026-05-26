import React from 'react';

export interface LanValueAbsoluteProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanValueAbsolute: React.FC<LanValueAbsoluteProps>;
export default LanValueAbsolute;

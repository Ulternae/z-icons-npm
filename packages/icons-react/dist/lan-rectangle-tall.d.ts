import React from 'react';

export interface LanRectangleTallProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRectangleTall: React.FC<LanRectangleTallProps>;
export default LanRectangleTall;

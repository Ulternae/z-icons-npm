import React from 'react';

export interface LanRectangleTallSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRectangleTallSolid: React.FC<LanRectangleTallSolidProps>;
export default LanRectangleTallSolid;

import React from 'react';

export interface LanRectangleProProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRectanglePro: React.FC<LanRectangleProProps>;
export default LanRectanglePro;

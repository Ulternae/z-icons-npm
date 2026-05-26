import React from 'react';

export interface LanRectangleMinusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRectangleMinusSolid: React.FC<LanRectangleMinusSolidProps>;
export default LanRectangleMinusSolid;

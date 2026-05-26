import React from 'react';

export interface LanStrawberrySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStrawberrySolid: React.FC<LanStrawberrySolidProps>;
export default LanStrawberrySolid;

import React from 'react';

export interface LanFerrySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFerrySolid: React.FC<LanFerrySolidProps>;
export default LanFerrySolid;

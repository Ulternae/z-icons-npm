import React from 'react';

export interface LanFaceWearySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceWearySolid: React.FC<LanFaceWearySolidProps>;
export default LanFaceWearySolid;

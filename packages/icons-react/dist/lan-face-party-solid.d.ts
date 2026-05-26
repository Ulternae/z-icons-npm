import React from 'react';

export interface LanFacePartySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFacePartySolid: React.FC<LanFacePartySolidProps>;
export default LanFacePartySolid;

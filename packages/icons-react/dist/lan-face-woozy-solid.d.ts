import React from 'react';

export interface LanFaceWoozySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceWoozySolid: React.FC<LanFaceWoozySolidProps>;
export default LanFaceWoozySolid;

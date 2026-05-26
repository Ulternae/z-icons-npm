import React from 'react';

export interface LanFaceGrinWideSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceGrinWideSolid: React.FC<LanFaceGrinWideSolidProps>;
export default LanFaceGrinWideSolid;

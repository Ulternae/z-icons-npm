import React from 'react';

export interface LanFaceMonocleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceMonocleSolid: React.FC<LanFaceMonocleSolidProps>;
export default LanFaceMonocleSolid;

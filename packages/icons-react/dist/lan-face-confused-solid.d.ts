import React from 'react';

export interface LanFaceConfusedSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceConfusedSolid: React.FC<LanFaceConfusedSolidProps>;
export default LanFaceConfusedSolid;

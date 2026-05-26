import React from 'react';

export interface LanFaceUnamusedSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceUnamusedSolid: React.FC<LanFaceUnamusedSolidProps>;
export default LanFaceUnamusedSolid;

import React from 'react';

export interface LanFaceRelievedSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceRelievedSolid: React.FC<LanFaceRelievedSolidProps>;
export default LanFaceRelievedSolid;

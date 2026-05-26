import React from 'react';

export interface LanFireFlameCurvedSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFireFlameCurvedSolid: React.FC<LanFireFlameCurvedSolidProps>;
export default LanFireFlameCurvedSolid;

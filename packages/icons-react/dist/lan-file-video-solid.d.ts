import React from 'react';

export interface LanFileVideoSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileVideoSolid: React.FC<LanFileVideoSolidProps>;
export default LanFileVideoSolid;

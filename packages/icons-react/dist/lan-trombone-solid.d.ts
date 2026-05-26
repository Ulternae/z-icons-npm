import React from 'react';

export interface LanTromboneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTromboneSolid: React.FC<LanTromboneSolidProps>;
export default LanTromboneSolid;

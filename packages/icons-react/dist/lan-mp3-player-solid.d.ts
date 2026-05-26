import React from 'react';

export interface LanMp3PlayerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMp3PlayerSolid: React.FC<LanMp3PlayerSolidProps>;
export default LanMp3PlayerSolid;

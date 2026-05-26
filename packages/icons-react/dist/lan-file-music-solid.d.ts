import React from 'react';

export interface LanFileMusicSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileMusicSolid: React.FC<LanFileMusicSolidProps>;
export default LanFileMusicSolid;

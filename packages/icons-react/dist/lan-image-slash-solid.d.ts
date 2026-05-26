import React from 'react';

export interface LanImageSlashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanImageSlashSolid: React.FC<LanImageSlashSolidProps>;
export default LanImageSlashSolid;

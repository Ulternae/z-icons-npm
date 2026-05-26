import React from 'react';

export interface LanBoltSlashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBoltSlashSolid: React.FC<LanBoltSlashSolidProps>;
export default LanBoltSlashSolid;

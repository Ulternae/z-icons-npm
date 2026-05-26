import React from 'react';

export interface LanBellSlashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBellSlashSolid: React.FC<LanBellSlashSolidProps>;
export default LanBellSlashSolid;

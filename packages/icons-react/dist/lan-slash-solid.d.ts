import React from 'react';

export interface LanSlashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSlashSolid: React.FC<LanSlashSolidProps>;
export default LanSlashSolid;

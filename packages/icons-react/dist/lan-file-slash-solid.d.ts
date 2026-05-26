import React from 'react';

export interface LanFileSlashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileSlashSolid: React.FC<LanFileSlashSolidProps>;
export default LanFileSlashSolid;

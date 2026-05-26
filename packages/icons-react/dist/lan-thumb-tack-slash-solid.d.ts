import React from 'react';

export interface LanThumbTackSlashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanThumbTackSlashSolid: React.FC<LanThumbTackSlashSolidProps>;
export default LanThumbTackSlashSolid;

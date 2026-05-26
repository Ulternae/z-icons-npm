import React from 'react';

export interface LanLinkSlashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLinkSlashSolid: React.FC<LanLinkSlashSolidProps>;
export default LanLinkSlashSolid;

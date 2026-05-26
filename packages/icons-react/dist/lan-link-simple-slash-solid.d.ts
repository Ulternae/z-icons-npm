import React from 'react';

export interface LanLinkSimpleSlashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLinkSimpleSlashSolid: React.FC<LanLinkSimpleSlashSolidProps>;
export default LanLinkSimpleSlashSolid;

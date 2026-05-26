import React from 'react';

export interface LanLinkHorizontalSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLinkHorizontalSlash: React.FC<LanLinkHorizontalSlashProps>;
export default LanLinkHorizontalSlash;

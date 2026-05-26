import React from 'react';

export interface LanLinkSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLinkSlash: React.FC<LanLinkSlashProps>;
export default LanLinkSlash;

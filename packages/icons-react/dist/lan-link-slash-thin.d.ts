import React from 'react';

export interface LanLinkSlashThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLinkSlashThin: React.FC<LanLinkSlashThinProps>;
export default LanLinkSlashThin;

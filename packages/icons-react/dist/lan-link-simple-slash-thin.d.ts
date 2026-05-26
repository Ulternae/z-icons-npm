import React from 'react';

export interface LanLinkSimpleSlashThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLinkSimpleSlashThin: React.FC<LanLinkSimpleSlashThinProps>;
export default LanLinkSimpleSlashThin;

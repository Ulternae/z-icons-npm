import React from 'react';

export interface LanLinkSimpleSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLinkSimpleSlash: React.FC<LanLinkSimpleSlashProps>;
export default LanLinkSimpleSlash;

import React from 'react';

export interface LanLinkSimpleSlashRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLinkSimpleSlashRegular: React.FC<LanLinkSimpleSlashRegularProps>;
export default LanLinkSimpleSlashRegular;

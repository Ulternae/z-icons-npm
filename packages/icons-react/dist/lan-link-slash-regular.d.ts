import React from 'react';

export interface LanLinkSlashRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLinkSlashRegular: React.FC<LanLinkSlashRegularProps>;
export default LanLinkSlashRegular;

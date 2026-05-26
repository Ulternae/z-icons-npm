import React from 'react';

export interface LanMobileSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMobileSlash: React.FC<LanMobileSlashProps>;
export default LanMobileSlash;

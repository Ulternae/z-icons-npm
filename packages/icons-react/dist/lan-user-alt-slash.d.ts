import React from 'react';

export interface LanUserAltSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserAltSlash: React.FC<LanUserAltSlashProps>;
export default LanUserAltSlash;

import React from 'react';

export interface LanTintSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTintSlash: React.FC<LanTintSlashProps>;
export default LanTintSlash;

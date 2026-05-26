import React from 'react';

export interface LanImageSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanImageSlash: React.FC<LanImageSlashProps>;
export default LanImageSlash;

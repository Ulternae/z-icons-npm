import React from 'react';

export interface LanCompassSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCompassSlash: React.FC<LanCompassSlashProps>;
export default LanCompassSlash;

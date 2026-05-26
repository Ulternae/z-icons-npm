import React from 'react';

export interface LanCompassSlashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCompassSlashSolid: React.FC<LanCompassSlashSolidProps>;
export default LanCompassSlashSolid;

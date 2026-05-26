import React from 'react';

export interface LanCompassSlashThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCompassSlashThin: React.FC<LanCompassSlashThinProps>;
export default LanCompassSlashThin;

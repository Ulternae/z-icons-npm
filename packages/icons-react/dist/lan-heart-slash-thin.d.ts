import React from 'react';

export interface LanHeartSlashThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHeartSlashThin: React.FC<LanHeartSlashThinProps>;
export default LanHeartSlashThin;

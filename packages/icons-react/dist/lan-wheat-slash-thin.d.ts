import React from 'react';

export interface LanWheatSlashThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWheatSlashThin: React.FC<LanWheatSlashThinProps>;
export default LanWheatSlashThin;

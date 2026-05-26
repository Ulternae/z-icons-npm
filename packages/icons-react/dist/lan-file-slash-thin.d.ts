import React from 'react';

export interface LanFileSlashThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileSlashThin: React.FC<LanFileSlashThinProps>;
export default LanFileSlashThin;

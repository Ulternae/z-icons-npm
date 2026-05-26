import React from 'react';

export interface LanSlashThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSlashThin: React.FC<LanSlashThinProps>;
export default LanSlashThin;

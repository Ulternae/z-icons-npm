import React from 'react';

export interface LanTextSlashThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTextSlashThin: React.FC<LanTextSlashThinProps>;
export default LanTextSlashThin;

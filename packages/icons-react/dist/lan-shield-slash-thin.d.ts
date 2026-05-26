import React from 'react';

export interface LanShieldSlashThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShieldSlashThin: React.FC<LanShieldSlashThinProps>;
export default LanShieldSlashThin;

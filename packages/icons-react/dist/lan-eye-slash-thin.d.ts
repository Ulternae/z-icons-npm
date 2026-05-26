import React from 'react';

export interface LanEyeSlashThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEyeSlashThin: React.FC<LanEyeSlashThinProps>;
export default LanEyeSlashThin;

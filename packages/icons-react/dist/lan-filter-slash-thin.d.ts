import React from 'react';

export interface LanFilterSlashThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFilterSlashThin: React.FC<LanFilterSlashThinProps>;
export default LanFilterSlashThin;

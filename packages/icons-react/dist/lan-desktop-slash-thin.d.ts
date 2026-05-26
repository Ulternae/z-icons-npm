import React from 'react';

export interface LanDesktopSlashThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDesktopSlashThin: React.FC<LanDesktopSlashThinProps>;
export default LanDesktopSlashThin;

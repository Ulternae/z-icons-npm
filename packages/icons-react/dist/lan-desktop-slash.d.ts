import React from 'react';

export interface LanDesktopSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDesktopSlash: React.FC<LanDesktopSlashProps>;
export default LanDesktopSlash;

import React from 'react';

export interface LanThumbTackSlashThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanThumbTackSlashThin: React.FC<LanThumbTackSlashThinProps>;
export default LanThumbTackSlashThin;

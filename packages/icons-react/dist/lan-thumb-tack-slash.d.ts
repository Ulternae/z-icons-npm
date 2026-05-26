import React from 'react';

export interface LanThumbTackSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanThumbTackSlash: React.FC<LanThumbTackSlashProps>;
export default LanThumbTackSlash;

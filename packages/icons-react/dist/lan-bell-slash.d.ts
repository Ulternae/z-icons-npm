import React from 'react';

export interface LanBellSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBellSlash: React.FC<LanBellSlashProps>;
export default LanBellSlash;

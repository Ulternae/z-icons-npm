import React from 'react';

export interface LanBoltSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBoltSlash: React.FC<LanBoltSlashProps>;
export default LanBoltSlash;

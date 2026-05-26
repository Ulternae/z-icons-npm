import React from 'react';

export interface LanFileSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileSlash: React.FC<LanFileSlashProps>;
export default LanFileSlash;

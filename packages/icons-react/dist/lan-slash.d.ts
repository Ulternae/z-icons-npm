import React from 'react';

export interface LanSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSlash: React.FC<LanSlashProps>;
export default LanSlash;

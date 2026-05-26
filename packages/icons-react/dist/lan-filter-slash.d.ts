import React from 'react';

export interface LanFilterSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFilterSlash: React.FC<LanFilterSlashProps>;
export default LanFilterSlash;

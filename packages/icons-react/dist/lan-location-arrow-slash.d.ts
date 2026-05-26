import React from 'react';

export interface LanLocationArrowSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLocationArrowSlash: React.FC<LanLocationArrowSlashProps>;
export default LanLocationArrowSlash;

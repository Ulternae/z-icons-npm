import React from 'react';

export interface LanPlaneSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlaneSlash: React.FC<LanPlaneSlashProps>;
export default LanPlaneSlash;

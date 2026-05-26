import React from 'react';

export interface LanPlaneUpSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlaneUpSlash: React.FC<LanPlaneUpSlashProps>;
export default LanPlaneUpSlash;

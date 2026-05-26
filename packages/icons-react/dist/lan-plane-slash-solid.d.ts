import React from 'react';

export interface LanPlaneSlashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlaneSlashSolid: React.FC<LanPlaneSlashSolidProps>;
export default LanPlaneSlashSolid;

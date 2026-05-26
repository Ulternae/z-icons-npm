import React from 'react';

export interface LanAlignSlashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAlignSlashSolid: React.FC<LanAlignSlashSolidProps>;
export default LanAlignSlashSolid;

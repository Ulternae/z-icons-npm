import React from 'react';

export interface LanFloppyDiskSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFloppyDiskSolid: React.FC<LanFloppyDiskSolidProps>;
export default LanFloppyDiskSolid;

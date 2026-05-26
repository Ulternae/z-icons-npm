import React from 'react';

export interface LanFloppyDiskPenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFloppyDiskPenSolid: React.FC<LanFloppyDiskPenSolidProps>;
export default LanFloppyDiskPenSolid;

import React from 'react';

export interface LanFloppyDisksSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFloppyDisksSolid: React.FC<LanFloppyDisksSolidProps>;
export default LanFloppyDisksSolid;

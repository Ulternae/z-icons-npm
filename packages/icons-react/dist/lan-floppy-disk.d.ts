import React from 'react';

export interface LanFloppyDiskProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFloppyDisk: React.FC<LanFloppyDiskProps>;
export default LanFloppyDisk;

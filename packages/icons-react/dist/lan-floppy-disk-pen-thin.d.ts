import React from 'react';

export interface LanFloppyDiskPenThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFloppyDiskPenThin: React.FC<LanFloppyDiskPenThinProps>;
export default LanFloppyDiskPenThin;

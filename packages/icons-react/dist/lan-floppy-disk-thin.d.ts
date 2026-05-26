import React from 'react';

export interface LanFloppyDiskThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFloppyDiskThin: React.FC<LanFloppyDiskThinProps>;
export default LanFloppyDiskThin;

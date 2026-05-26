import React from 'react';

export interface LanFloppyDisksThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFloppyDisksThin: React.FC<LanFloppyDisksThinProps>;
export default LanFloppyDisksThin;

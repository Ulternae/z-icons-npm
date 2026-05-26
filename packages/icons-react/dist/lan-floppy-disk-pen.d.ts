import React from 'react';

export interface LanFloppyDiskPenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFloppyDiskPen: React.FC<LanFloppyDiskPenProps>;
export default LanFloppyDiskPen;

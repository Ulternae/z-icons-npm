import React from 'react';

export interface LanFloppyDiskPenRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFloppyDiskPenRegular: React.FC<LanFloppyDiskPenRegularProps>;
export default LanFloppyDiskPenRegular;

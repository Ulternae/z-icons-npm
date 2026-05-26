import React from 'react';

export interface LanFloppyDiskRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFloppyDiskRegular: React.FC<LanFloppyDiskRegularProps>;
export default LanFloppyDiskRegular;

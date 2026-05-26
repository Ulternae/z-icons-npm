import React from 'react';

export interface LanFloppyDisksRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFloppyDisksRegular: React.FC<LanFloppyDisksRegularProps>;
export default LanFloppyDisksRegular;

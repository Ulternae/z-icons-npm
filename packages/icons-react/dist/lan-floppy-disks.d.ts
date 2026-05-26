import React from 'react';

export interface LanFloppyDisksProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFloppyDisks: React.FC<LanFloppyDisksProps>;
export default LanFloppyDisks;

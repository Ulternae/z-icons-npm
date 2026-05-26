import React from 'react';

export interface LanBellsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBells: React.FC<LanBellsProps>;
export default LanBells;

import React from 'react';

export interface LanShelvesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShelves: React.FC<LanShelvesProps>;
export default LanShelves;

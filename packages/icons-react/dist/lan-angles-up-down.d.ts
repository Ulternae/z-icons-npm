import React from 'react';

export interface LanAnglesUpDownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAnglesUpDown: React.FC<LanAnglesUpDownProps>;
export default LanAnglesUpDown;

import React from 'react';

export interface LanSailboatProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSailboat: React.FC<LanSailboatProps>;
export default LanSailboat;

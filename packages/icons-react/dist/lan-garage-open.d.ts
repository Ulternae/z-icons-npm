import React from 'react';

export interface LanGarageOpenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGarageOpen: React.FC<LanGarageOpenProps>;
export default LanGarageOpen;

import React from 'react';

export interface LanPizzaSliceThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPizzaSliceThin: React.FC<LanPizzaSliceThinProps>;
export default LanPizzaSliceThin;

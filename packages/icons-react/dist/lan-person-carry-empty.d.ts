import React from 'react';

export interface LanPersonCarryEmptyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonCarryEmpty: React.FC<LanPersonCarryEmptyProps>;
export default LanPersonCarryEmpty;

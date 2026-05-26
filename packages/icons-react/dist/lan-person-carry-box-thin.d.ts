import React from 'react';

export interface LanPersonCarryBoxThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonCarryBoxThin: React.FC<LanPersonCarryBoxThinProps>;
export default LanPersonCarryBoxThin;

import React from 'react';

export interface LanWaffleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWaffle: React.FC<LanWaffleProps>;
export default LanWaffle;

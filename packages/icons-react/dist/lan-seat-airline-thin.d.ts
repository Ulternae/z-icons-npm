import React from 'react';

export interface LanSeatAirlineThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSeatAirlineThin: React.FC<LanSeatAirlineThinProps>;
export default LanSeatAirlineThin;

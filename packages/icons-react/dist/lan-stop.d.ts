import React from 'react';

export interface LanStopProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStop: React.FC<LanStopProps>;
export default LanStop;

import React from 'react';

export interface LanSignal4RegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSignal4Regular: React.FC<LanSignal4RegularProps>;
export default LanSignal4Regular;

import React from 'react';

export interface LanWatchCalculatorSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWatchCalculatorSolid: React.FC<LanWatchCalculatorSolidProps>;
export default LanWatchCalculatorSolid;

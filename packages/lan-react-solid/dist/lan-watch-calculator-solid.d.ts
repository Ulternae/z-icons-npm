import React from 'react';

export interface LanWatchCalculatorSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWatchCalculatorSolid(props: LanWatchCalculatorSolidProps): React.ReactElement;
export default LanWatchCalculatorSolid;

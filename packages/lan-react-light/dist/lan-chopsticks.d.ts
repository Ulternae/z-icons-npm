import React from 'react';

export interface LanChopsticksProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChopsticks(props: LanChopsticksProps): React.ReactElement;
export default LanChopsticks;

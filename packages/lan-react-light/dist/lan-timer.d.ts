import React from 'react';

export interface LanTimerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTimer(props: LanTimerProps): React.ReactElement;
export default LanTimer;

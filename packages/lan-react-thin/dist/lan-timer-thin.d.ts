import React from 'react';

export interface LanTimerThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTimerThin(props: LanTimerThinProps): React.ReactElement;
export default LanTimerThin;

import React from 'react';

export interface LanTimerRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTimerRegular(props: LanTimerRegularProps): React.ReactElement;
export default LanTimerRegular;

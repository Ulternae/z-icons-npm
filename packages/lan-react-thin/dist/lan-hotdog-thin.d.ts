import React from 'react';

export interface LanHotdogThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHotdogThin(props: LanHotdogThinProps): React.ReactElement;
export default LanHotdogThin;

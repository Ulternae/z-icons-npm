import React from 'react';

export interface LanWindsockThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWindsockThin(props: LanWindsockThinProps): React.ReactElement;
export default LanWindsockThin;

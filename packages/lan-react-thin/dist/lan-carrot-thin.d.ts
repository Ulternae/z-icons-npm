import React from 'react';

export interface LanCarrotThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCarrotThin(props: LanCarrotThinProps): React.ReactElement;
export default LanCarrotThin;

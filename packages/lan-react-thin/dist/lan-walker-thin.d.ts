import React from 'react';

export interface LanWalkerThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWalkerThin(props: LanWalkerThinProps): React.ReactElement;
export default LanWalkerThin;

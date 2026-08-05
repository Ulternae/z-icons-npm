import React from 'react';

export interface LanGlobeStandThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGlobeStandThin(props: LanGlobeStandThinProps): React.ReactElement;
export default LanGlobeStandThin;

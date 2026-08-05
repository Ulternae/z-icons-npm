import React from 'react';

export interface LanCompassThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCompassThin(props: LanCompassThinProps): React.ReactElement;
export default LanCompassThin;

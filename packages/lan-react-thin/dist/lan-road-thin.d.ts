import React from 'react';

export interface LanRoadThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRoadThin(props: LanRoadThinProps): React.ReactElement;
export default LanRoadThin;

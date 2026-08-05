import React from 'react';

export interface LanRectangleVideoOnDemandThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRectangleVideoOnDemandThin(props: LanRectangleVideoOnDemandThinProps): React.ReactElement;
export default LanRectangleVideoOnDemandThin;

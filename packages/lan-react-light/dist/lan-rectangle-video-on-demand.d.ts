import React from 'react';

export interface LanRectangleVideoOnDemandProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRectangleVideoOnDemand(props: LanRectangleVideoOnDemandProps): React.ReactElement;
export default LanRectangleVideoOnDemand;

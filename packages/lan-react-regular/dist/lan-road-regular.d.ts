import React from 'react';

export interface LanRoadRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRoadRegular(props: LanRoadRegularProps): React.ReactElement;
export default LanRoadRegular;

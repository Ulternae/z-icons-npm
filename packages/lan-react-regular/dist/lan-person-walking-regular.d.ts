import React from 'react';

export interface LanPersonWalkingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonWalkingRegular(props: LanPersonWalkingRegularProps): React.ReactElement;
export default LanPersonWalkingRegular;

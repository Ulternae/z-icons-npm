import React from 'react';

export interface LanHeartRateSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHeartRateSolid(props: LanHeartRateSolidProps): React.ReactElement;
export default LanHeartRateSolid;

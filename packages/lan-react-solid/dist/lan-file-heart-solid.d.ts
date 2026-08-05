import React from 'react';

export interface LanFileHeartSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileHeartSolid(props: LanFileHeartSolidProps): React.ReactElement;
export default LanFileHeartSolid;

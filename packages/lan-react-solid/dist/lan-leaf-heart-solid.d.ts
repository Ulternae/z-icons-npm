import React from 'react';

export interface LanLeafHeartSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLeafHeartSolid(props: LanLeafHeartSolidProps): React.ReactElement;
export default LanLeafHeartSolid;

import React from 'react';

export interface LanCarGarageSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCarGarageSolid(props: LanCarGarageSolidProps): React.ReactElement;
export default LanCarGarageSolid;

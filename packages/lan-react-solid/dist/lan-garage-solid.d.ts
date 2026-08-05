import React from 'react';

export interface LanGarageSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGarageSolid(props: LanGarageSolidProps): React.ReactElement;
export default LanGarageSolid;

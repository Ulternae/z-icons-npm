import React from 'react';

export interface LanCircleRubleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleRubleSolid(props: LanCircleRubleSolidProps): React.ReactElement;
export default LanCircleRubleSolid;

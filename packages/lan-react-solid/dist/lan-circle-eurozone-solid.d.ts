import React from 'react';

export interface LanCircleEurozoneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleEurozoneSolid(props: LanCircleEurozoneSolidProps): React.ReactElement;
export default LanCircleEurozoneSolid;

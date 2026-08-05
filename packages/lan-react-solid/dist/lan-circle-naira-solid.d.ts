import React from 'react';

export interface LanCircleNairaSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleNairaSolid(props: LanCircleNairaSolidProps): React.ReactElement;
export default LanCircleNairaSolid;

import React from 'react';

export interface LanCircleHryvniaSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleHryvniaSolid(props: LanCircleHryvniaSolidProps): React.ReactElement;
export default LanCircleHryvniaSolid;

import React from 'react';

export interface LanCircleRupeeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleRupeeSolid(props: LanCircleRupeeSolidProps): React.ReactElement;
export default LanCircleRupeeSolid;

import React from 'react';

export interface LanCircleMinusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleMinusSolid(props: LanCircleMinusSolidProps): React.ReactElement;
export default LanCircleMinusSolid;

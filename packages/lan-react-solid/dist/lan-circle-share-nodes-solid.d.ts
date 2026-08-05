import React from 'react';

export interface LanCircleShareNodesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleShareNodesSolid(props: LanCircleShareNodesSolidProps): React.ReactElement;
export default LanCircleShareNodesSolid;

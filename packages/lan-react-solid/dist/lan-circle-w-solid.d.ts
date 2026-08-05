import React from 'react';

export interface LanCircleWSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleWSolid(props: LanCircleWSolidProps): React.ReactElement;
export default LanCircleWSolid;

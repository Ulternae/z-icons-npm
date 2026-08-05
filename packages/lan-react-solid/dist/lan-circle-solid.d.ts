import React from 'react';

export interface LanCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleSolid(props: LanCircleSolidProps): React.ReactElement;
export default LanCircleSolid;

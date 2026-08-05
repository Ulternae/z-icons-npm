import React from 'react';

export interface LanCircleZSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleZSolid(props: LanCircleZSolidProps): React.ReactElement;
export default LanCircleZSolid;

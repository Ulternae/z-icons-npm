import React from 'react';

export interface LanCircleJSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleJSolid(props: LanCircleJSolidProps): React.ReactElement;
export default LanCircleJSolid;

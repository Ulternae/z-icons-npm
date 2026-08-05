import React from 'react';

export interface MinaCircleNotchSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCircleNotchSolid(props: MinaCircleNotchSolidProps): React.ReactElement;
export default MinaCircleNotchSolid;

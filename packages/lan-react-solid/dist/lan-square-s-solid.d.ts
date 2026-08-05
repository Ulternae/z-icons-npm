import React from 'react';

export interface LanSquareSSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareSSolid(props: LanSquareSSolidProps): React.ReactElement;
export default LanSquareSSolid;

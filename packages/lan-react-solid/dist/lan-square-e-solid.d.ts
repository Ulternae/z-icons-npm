import React from 'react';

export interface LanSquareESolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareESolid(props: LanSquareESolidProps): React.ReactElement;
export default LanSquareESolid;

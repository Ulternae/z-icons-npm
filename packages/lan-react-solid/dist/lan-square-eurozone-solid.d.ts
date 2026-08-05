import React from 'react';

export interface LanSquareEurozoneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareEurozoneSolid(props: LanSquareEurozoneSolidProps): React.ReactElement;
export default LanSquareEurozoneSolid;

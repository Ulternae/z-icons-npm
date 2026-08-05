import React from 'react';

export interface LanSquareEqualsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareEqualsSolid(props: LanSquareEqualsSolidProps): React.ReactElement;
export default LanSquareEqualsSolid;

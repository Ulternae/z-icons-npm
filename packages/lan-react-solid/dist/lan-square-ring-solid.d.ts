import React from 'react';

export interface LanSquareRingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareRingSolid(props: LanSquareRingSolidProps): React.ReactElement;
export default LanSquareRingSolid;

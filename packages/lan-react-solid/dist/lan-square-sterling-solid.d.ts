import React from 'react';

export interface LanSquareSterlingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareSterlingSolid(props: LanSquareSterlingSolidProps): React.ReactElement;
export default LanSquareSterlingSolid;

import React from 'react';

export interface LanSquareEllipsisSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareEllipsisSolid(props: LanSquareEllipsisSolidProps): React.ReactElement;
export default LanSquareEllipsisSolid;

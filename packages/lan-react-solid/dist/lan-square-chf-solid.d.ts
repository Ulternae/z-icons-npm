import React from 'react';

export interface LanSquareChfSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareChfSolid(props: LanSquareChfSolidProps): React.ReactElement;
export default LanSquareChfSolid;

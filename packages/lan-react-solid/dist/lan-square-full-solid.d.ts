import React from 'react';

export interface LanSquareFullSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareFullSolid(props: LanSquareFullSolidProps): React.ReactElement;
export default LanSquareFullSolid;

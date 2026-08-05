import React from 'react';

export interface LanSquareFlorinSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareFlorinSolid(props: LanSquareFlorinSolidProps): React.ReactElement;
export default LanSquareFlorinSolid;

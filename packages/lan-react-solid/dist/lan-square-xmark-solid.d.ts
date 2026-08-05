import React from 'react';

export interface LanSquareXmarkSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareXmarkSolid(props: LanSquareXmarkSolidProps): React.ReactElement;
export default LanSquareXmarkSolid;

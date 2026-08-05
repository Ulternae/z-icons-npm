import React from 'react';

export interface LanSquareQSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareQSolid(props: LanSquareQSolidProps): React.ReactElement;
export default LanSquareQSolid;

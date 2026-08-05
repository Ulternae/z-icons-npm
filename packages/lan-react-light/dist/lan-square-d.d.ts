import React from 'react';

export interface LanSquareDProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareD(props: LanSquareDProps): React.ReactElement;
export default LanSquareD;

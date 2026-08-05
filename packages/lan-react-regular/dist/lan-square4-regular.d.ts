import React from 'react';

export interface LanSquare4RegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquare4Regular(props: LanSquare4RegularProps): React.ReactElement;
export default LanSquare4Regular;

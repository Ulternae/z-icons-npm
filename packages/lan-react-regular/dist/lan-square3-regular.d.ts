import React from 'react';

export interface LanSquare3RegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquare3Regular(props: LanSquare3RegularProps): React.ReactElement;
export default LanSquare3Regular;

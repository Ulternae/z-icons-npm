import React from 'react';

export interface LanSquare8RegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquare8Regular(props: LanSquare8RegularProps): React.ReactElement;
export default LanSquare8Regular;

import React from 'react';

export interface LanSquareJRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareJRegular(props: LanSquareJRegularProps): React.ReactElement;
export default LanSquareJRegular;

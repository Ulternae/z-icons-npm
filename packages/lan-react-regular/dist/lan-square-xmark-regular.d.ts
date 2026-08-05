import React from 'react';

export interface LanSquareXmarkRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareXmarkRegular(props: LanSquareXmarkRegularProps): React.ReactElement;
export default LanSquareXmarkRegular;

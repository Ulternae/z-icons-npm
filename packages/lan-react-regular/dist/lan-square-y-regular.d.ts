import React from 'react';

export interface LanSquareYRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareYRegular(props: LanSquareYRegularProps): React.ReactElement;
export default LanSquareYRegular;

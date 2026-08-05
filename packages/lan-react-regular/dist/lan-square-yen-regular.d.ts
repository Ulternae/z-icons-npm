import React from 'react';

export interface LanSquareYenRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareYenRegular(props: LanSquareYenRegularProps): React.ReactElement;
export default LanSquareYenRegular;

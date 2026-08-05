import React from 'react';

export interface LanSquareListRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareListRegular(props: LanSquareListRegularProps): React.ReactElement;
export default LanSquareListRegular;

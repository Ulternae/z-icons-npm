import React from 'react';

export interface LanSquareManatRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareManatRegular(props: LanSquareManatRegularProps): React.ReactElement;
export default LanSquareManatRegular;

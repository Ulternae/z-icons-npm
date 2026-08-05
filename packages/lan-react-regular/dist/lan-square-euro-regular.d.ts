import React from 'react';

export interface LanSquareEuroRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareEuroRegular(props: LanSquareEuroRegularProps): React.ReactElement;
export default LanSquareEuroRegular;

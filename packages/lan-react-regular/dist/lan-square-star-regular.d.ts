import React from 'react';

export interface LanSquareStarRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareStarRegular(props: LanSquareStarRegularProps): React.ReactElement;
export default LanSquareStarRegular;

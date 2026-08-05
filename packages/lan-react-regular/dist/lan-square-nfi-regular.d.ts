import React from 'react';

export interface LanSquareNfiRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareNfiRegular(props: LanSquareNfiRegularProps): React.ReactElement;
export default LanSquareNfiRegular;

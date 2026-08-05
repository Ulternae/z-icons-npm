import React from 'react';

export interface LanSquareGRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareGRegular(props: LanSquareGRegularProps): React.ReactElement;
export default LanSquareGRegular;

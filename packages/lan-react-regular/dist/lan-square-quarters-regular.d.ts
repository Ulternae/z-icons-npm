import React from 'react';

export interface LanSquareQuartersRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareQuartersRegular(props: LanSquareQuartersRegularProps): React.ReactElement;
export default LanSquareQuartersRegular;

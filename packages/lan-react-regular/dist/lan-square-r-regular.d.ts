import React from 'react';

export interface LanSquareRRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareRRegular(props: LanSquareRRegularProps): React.ReactElement;
export default LanSquareRRegular;

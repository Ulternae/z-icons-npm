import React from 'react';

export interface LanLambdaRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLambdaRegular(props: LanLambdaRegularProps): React.ReactElement;
export default LanLambdaRegular;

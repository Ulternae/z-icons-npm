import React from 'react';

export interface LanLambdaProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLambda(props: LanLambdaProps): React.ReactElement;
export default LanLambda;

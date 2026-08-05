import React from 'react';

export interface LanLambdaThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLambdaThin(props: LanLambdaThinProps): React.ReactElement;
export default LanLambdaThin;

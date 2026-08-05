import React from 'react';

export interface LanLambdaSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLambdaSolid(props: LanLambdaSolidProps): React.ReactElement;
export default LanLambdaSolid;

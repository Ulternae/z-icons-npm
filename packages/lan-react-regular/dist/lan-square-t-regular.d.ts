import React from 'react';

export interface LanSquareTRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareTRegular(props: LanSquareTRegularProps): React.ReactElement;
export default LanSquareTRegular;

import React from 'react';

export interface LanSquareLRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareLRegular(props: LanSquareLRegularProps): React.ReactElement;
export default LanSquareLRegular;

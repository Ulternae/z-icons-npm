import React from 'react';

export interface LanSquareCRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareCRegular(props: LanSquareCRegularProps): React.ReactElement;
export default LanSquareCRegular;

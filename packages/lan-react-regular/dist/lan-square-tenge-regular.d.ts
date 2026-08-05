import React from 'react';

export interface LanSquareTengeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareTengeRegular(props: LanSquareTengeRegularProps): React.ReactElement;
export default LanSquareTengeRegular;

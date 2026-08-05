import React from 'react';

export interface LanCircleTengeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleTengeRegular(props: LanCircleTengeRegularProps): React.ReactElement;
export default LanCircleTengeRegular;

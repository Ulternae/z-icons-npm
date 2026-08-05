import React from 'react';

export interface LanKitchenSetRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanKitchenSetRegular(props: LanKitchenSetRegularProps): React.ReactElement;
export default LanKitchenSetRegular;

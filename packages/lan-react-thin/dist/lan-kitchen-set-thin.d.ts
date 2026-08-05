import React from 'react';

export interface LanKitchenSetThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanKitchenSetThin(props: LanKitchenSetThinProps): React.ReactElement;
export default LanKitchenSetThin;

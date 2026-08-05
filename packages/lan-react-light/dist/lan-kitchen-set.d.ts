import React from 'react';

export interface LanKitchenSetProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanKitchenSet(props: LanKitchenSetProps): React.ReactElement;
export default LanKitchenSet;

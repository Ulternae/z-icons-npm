import React from 'react';

export interface LanCarWashRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCarWashRegular(props: LanCarWashRegularProps): React.ReactElement;
export default LanCarWashRegular;

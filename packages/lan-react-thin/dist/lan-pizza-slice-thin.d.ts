import React from 'react';

export interface LanPizzaSliceThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPizzaSliceThin(props: LanPizzaSliceThinProps): React.ReactElement;
export default LanPizzaSliceThin;

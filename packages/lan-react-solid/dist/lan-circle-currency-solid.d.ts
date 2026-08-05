import React from 'react';

export interface LanCircleCurrencySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleCurrencySolid(props: LanCircleCurrencySolidProps): React.ReactElement;
export default LanCircleCurrencySolid;

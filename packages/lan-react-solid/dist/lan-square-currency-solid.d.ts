import React from 'react';

export interface LanSquareCurrencySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareCurrencySolid(props: LanSquareCurrencySolidProps): React.ReactElement;
export default LanSquareCurrencySolid;

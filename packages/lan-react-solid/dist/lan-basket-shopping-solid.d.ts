import React from 'react';

export interface LanBasketShoppingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBasketShoppingSolid(props: LanBasketShoppingSolidProps): React.ReactElement;
export default LanBasketShoppingSolid;

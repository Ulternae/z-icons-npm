import React from 'react';

export interface CoreBagShoppingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreBagShoppingSolid(props: CoreBagShoppingSolidProps): React.ReactElement;
export default CoreBagShoppingSolid;

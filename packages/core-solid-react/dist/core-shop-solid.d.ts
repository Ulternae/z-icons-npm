import React from 'react';

export interface CoreShopSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreShopSolid(props: CoreShopSolidProps): React.ReactElement;
export default CoreShopSolid;

import React from 'react';

export interface CoreCartShoppingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreCartShoppingSolid(props: CoreCartShoppingSolidProps): React.ReactElement;
export default CoreCartShoppingSolid;

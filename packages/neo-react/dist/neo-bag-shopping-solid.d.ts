import React from 'react';

export interface NeoBagShoppingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoBagShoppingSolid(props: NeoBagShoppingSolidProps): React.ReactElement;
export default NeoBagShoppingSolid;

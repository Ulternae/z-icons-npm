import React from 'react';

export interface LanBagShoppingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBagShoppingSolid(props: LanBagShoppingSolidProps): React.ReactElement;
export default LanBagShoppingSolid;

import React from 'react';

export interface LanBagsShoppingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBagsShoppingSolid(props: LanBagsShoppingSolidProps): React.ReactElement;
export default LanBagsShoppingSolid;

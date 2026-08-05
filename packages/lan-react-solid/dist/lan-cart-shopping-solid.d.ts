import React from 'react';

export interface LanCartShoppingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCartShoppingSolid(props: LanCartShoppingSolidProps): React.ReactElement;
export default LanCartShoppingSolid;

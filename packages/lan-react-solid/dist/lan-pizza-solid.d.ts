import React from 'react';

export interface LanPizzaSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPizzaSolid(props: LanPizzaSolidProps): React.ReactElement;
export default LanPizzaSolid;

import React from 'react';

export interface LanHydraSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHydraSolid(props: LanHydraSolidProps): React.ReactElement;
export default LanHydraSolid;

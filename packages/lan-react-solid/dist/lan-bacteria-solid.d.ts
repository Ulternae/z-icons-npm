import React from 'react';

export interface LanBacteriaSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBacteriaSolid(props: LanBacteriaSolidProps): React.ReactElement;
export default LanBacteriaSolid;

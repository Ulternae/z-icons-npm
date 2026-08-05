import React from 'react';

export interface LanBraSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBraSolid(props: LanBraSolidProps): React.ReactElement;
export default LanBraSolid;

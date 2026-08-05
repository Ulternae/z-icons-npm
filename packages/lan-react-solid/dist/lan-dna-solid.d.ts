import React from 'react';

export interface LanDnaSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDnaSolid(props: LanDnaSolidProps): React.ReactElement;
export default LanDnaSolid;

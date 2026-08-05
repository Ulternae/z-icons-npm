import React from 'react';

export interface LanKhandaSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanKhandaSolid(props: LanKhandaSolidProps): React.ReactElement;
export default LanKhandaSolid;

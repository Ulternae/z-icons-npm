import React from 'react';

export interface LanOmegaSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanOmegaSolid(props: LanOmegaSolidProps): React.ReactElement;
export default LanOmegaSolid;

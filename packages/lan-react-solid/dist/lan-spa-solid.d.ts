import React from 'react';

export interface LanSpaSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSpaSolid(props: LanSpaSolidProps): React.ReactElement;
export default LanSpaSolid;

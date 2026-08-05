import React from 'react';

export interface LanHamsaSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHamsaSolid(props: LanHamsaSolidProps): React.ReactElement;
export default LanHamsaSolid;

import React from 'react';

export interface LanCirclePesetaSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCirclePesetaSolid: React.FC<LanCirclePesetaSolidProps>;
export default LanCirclePesetaSolid;

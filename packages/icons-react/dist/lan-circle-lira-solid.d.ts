import React from 'react';

export interface LanCircleLiraSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleLiraSolid: React.FC<LanCircleLiraSolidProps>;
export default LanCircleLiraSolid;

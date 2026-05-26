import React from 'react';

export interface LanSquareLiraSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareLiraSolid: React.FC<LanSquareLiraSolidProps>;
export default LanSquareLiraSolid;

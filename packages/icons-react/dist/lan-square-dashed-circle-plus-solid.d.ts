import React from 'react';

export interface LanSquareDashedCirclePlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareDashedCirclePlusSolid: React.FC<LanSquareDashedCirclePlusSolidProps>;
export default LanSquareDashedCirclePlusSolid;

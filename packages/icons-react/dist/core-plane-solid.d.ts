import React from 'react';

export interface CorePlaneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CorePlaneSolid: React.FC<CorePlaneSolidProps>;
export default CorePlaneSolid;

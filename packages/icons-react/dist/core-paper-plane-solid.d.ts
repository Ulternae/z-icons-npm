import React from 'react';

export interface CorePaperPlaneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CorePaperPlaneSolid: React.FC<CorePaperPlaneSolidProps>;
export default CorePaperPlaneSolid;

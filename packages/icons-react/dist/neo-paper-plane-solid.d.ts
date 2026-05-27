import React from 'react';

export interface NeoPaperPlaneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoPaperPlaneSolid: React.FC<NeoPaperPlaneSolidProps>;
export default NeoPaperPlaneSolid;

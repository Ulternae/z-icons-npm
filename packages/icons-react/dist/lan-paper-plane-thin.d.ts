import React from 'react';

export interface LanPaperPlaneThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPaperPlaneThin: React.FC<LanPaperPlaneThinProps>;
export default LanPaperPlaneThin;

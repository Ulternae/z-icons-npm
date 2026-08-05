import React from 'react';

export interface LanPaperPlaneThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPaperPlaneThin(props: LanPaperPlaneThinProps): React.ReactElement;
export default LanPaperPlaneThin;

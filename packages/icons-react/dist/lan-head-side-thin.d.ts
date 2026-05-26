import React from 'react';

export interface LanHeadSideThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHeadSideThin: React.FC<LanHeadSideThinProps>;
export default LanHeadSideThin;

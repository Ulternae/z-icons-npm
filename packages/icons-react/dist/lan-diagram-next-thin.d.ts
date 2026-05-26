import React from 'react';

export interface LanDiagramNextThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiagramNextThin: React.FC<LanDiagramNextThinProps>;
export default LanDiagramNextThin;

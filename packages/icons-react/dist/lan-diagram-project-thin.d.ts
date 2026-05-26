import React from 'react';

export interface LanDiagramProjectThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiagramProjectThin: React.FC<LanDiagramProjectThinProps>;
export default LanDiagramProjectThin;

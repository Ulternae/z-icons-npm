import React from 'react';

export interface LanDiagramNestedThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiagramNestedThin: React.FC<LanDiagramNestedThinProps>;
export default LanDiagramNestedThin;

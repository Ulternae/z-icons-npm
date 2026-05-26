import React from 'react';

export interface LanDiagramSankeyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiagramSankeyThin: React.FC<LanDiagramSankeyThinProps>;
export default LanDiagramSankeyThin;

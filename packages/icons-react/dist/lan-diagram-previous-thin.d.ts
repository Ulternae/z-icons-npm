import React from 'react';

export interface LanDiagramPreviousThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiagramPreviousThin: React.FC<LanDiagramPreviousThinProps>;
export default LanDiagramPreviousThin;

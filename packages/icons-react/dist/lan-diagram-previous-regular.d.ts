import React from 'react';

export interface LanDiagramPreviousRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiagramPreviousRegular: React.FC<LanDiagramPreviousRegularProps>;
export default LanDiagramPreviousRegular;

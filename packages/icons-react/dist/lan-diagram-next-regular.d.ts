import React from 'react';

export interface LanDiagramNextRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiagramNextRegular: React.FC<LanDiagramNextRegularProps>;
export default LanDiagramNextRegular;

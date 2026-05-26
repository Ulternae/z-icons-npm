import React from 'react';

export interface LanDiagramSankeyRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiagramSankeyRegular: React.FC<LanDiagramSankeyRegularProps>;
export default LanDiagramSankeyRegular;

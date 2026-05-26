import React from 'react';

export interface LanDiagramNestedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiagramNested: React.FC<LanDiagramNestedProps>;
export default LanDiagramNested;

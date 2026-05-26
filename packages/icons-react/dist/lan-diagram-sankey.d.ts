import React from 'react';

export interface LanDiagramSankeyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiagramSankey: React.FC<LanDiagramSankeyProps>;
export default LanDiagramSankey;

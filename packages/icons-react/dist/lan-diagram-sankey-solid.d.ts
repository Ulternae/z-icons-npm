import React from 'react';

export interface LanDiagramSankeySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiagramSankeySolid: React.FC<LanDiagramSankeySolidProps>;
export default LanDiagramSankeySolid;

import React from 'react';

export interface LanDiagramSankeySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiagramSankeySolid(props: LanDiagramSankeySolidProps): React.ReactElement;
export default LanDiagramSankeySolid;

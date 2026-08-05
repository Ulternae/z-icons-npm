import React from 'react';

export interface LanDiagramNextSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiagramNextSolid(props: LanDiagramNextSolidProps): React.ReactElement;
export default LanDiagramNextSolid;

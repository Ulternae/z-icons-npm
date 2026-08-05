import React from 'react';

export interface LanDiagramProjectSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiagramProjectSolid(props: LanDiagramProjectSolidProps): React.ReactElement;
export default LanDiagramProjectSolid;

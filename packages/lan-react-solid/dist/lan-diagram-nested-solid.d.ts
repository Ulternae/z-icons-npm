import React from 'react';

export interface LanDiagramNestedSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiagramNestedSolid(props: LanDiagramNestedSolidProps): React.ReactElement;
export default LanDiagramNestedSolid;

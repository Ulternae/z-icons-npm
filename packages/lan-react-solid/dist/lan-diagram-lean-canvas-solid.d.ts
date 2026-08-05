import React from 'react';

export interface LanDiagramLeanCanvasSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiagramLeanCanvasSolid(props: LanDiagramLeanCanvasSolidProps): React.ReactElement;
export default LanDiagramLeanCanvasSolid;

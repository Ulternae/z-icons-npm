import React from 'react';

export interface LanDiagramVennSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiagramVennSolid(props: LanDiagramVennSolidProps): React.ReactElement;
export default LanDiagramVennSolid;

import React from 'react';

export interface LanDiagramCellsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiagramCellsRegular(props: LanDiagramCellsRegularProps): React.ReactElement;
export default LanDiagramCellsRegular;

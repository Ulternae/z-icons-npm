import React from 'react';

export interface LanDiagramCellsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiagramCellsThin(props: LanDiagramCellsThinProps): React.ReactElement;
export default LanDiagramCellsThin;

import React from 'react';

export interface LanDiagramLeanCanvasThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiagramLeanCanvasThin(props: LanDiagramLeanCanvasThinProps): React.ReactElement;
export default LanDiagramLeanCanvasThin;

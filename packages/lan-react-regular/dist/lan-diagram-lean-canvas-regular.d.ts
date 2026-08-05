import React from 'react';

export interface LanDiagramLeanCanvasRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiagramLeanCanvasRegular(props: LanDiagramLeanCanvasRegularProps): React.ReactElement;
export default LanDiagramLeanCanvasRegular;

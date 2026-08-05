import React from 'react';

export interface LanDiagramVennThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiagramVennThin(props: LanDiagramVennThinProps): React.ReactElement;
export default LanDiagramVennThin;

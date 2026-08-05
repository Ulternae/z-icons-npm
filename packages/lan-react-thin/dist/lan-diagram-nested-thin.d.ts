import React from 'react';

export interface LanDiagramNestedThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiagramNestedThin(props: LanDiagramNestedThinProps): React.ReactElement;
export default LanDiagramNestedThin;

import React from 'react';

export interface LanDiagramNestedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiagramNested(props: LanDiagramNestedProps): React.ReactElement;
export default LanDiagramNested;

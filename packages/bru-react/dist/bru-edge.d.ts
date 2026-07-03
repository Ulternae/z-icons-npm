import React from 'react';

export interface BruEdgeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruEdge(props: BruEdgeProps): React.ReactElement;
export default BruEdge;

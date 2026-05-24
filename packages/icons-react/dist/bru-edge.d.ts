import React from 'react';

export interface BruEdgeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruEdge: React.FC<BruEdgeProps>;
export default BruEdge;

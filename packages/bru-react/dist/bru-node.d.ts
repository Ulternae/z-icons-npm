import React from 'react';

export interface BruNodeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruNode(props: BruNodeProps): React.ReactElement;
export default BruNode;

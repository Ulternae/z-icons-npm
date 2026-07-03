import React from 'react';

export interface BruAdversalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruAdversal(props: BruAdversalProps): React.ReactElement;
export default BruAdversal;

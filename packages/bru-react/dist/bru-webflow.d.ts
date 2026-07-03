import React from 'react';

export interface BruWebflowProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruWebflow(props: BruWebflowProps): React.ReactElement;
export default BruWebflow;

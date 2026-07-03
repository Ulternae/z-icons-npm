import React from 'react';

export interface BruMoneroProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruMonero(props: BruMoneroProps): React.ReactElement;
export default BruMonero;

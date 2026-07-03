import React from 'react';

export interface BruQqProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruQq(props: BruQqProps): React.ReactElement;
export default BruQq;

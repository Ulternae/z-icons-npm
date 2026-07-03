import React from 'react';

export interface BruGgCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruGgCircle(props: BruGgCircleProps): React.ReactElement;
export default BruGgCircle;

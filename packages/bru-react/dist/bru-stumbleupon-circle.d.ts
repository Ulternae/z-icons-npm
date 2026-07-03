import React from 'react';

export interface BruStumbleuponCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruStumbleuponCircle(props: BruStumbleuponCircleProps): React.ReactElement;
export default BruStumbleuponCircle;

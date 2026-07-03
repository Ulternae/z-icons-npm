import React from 'react';

export interface BruForgejoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruForgejo(props: BruForgejoProps): React.ReactElement;
export default BruForgejo;

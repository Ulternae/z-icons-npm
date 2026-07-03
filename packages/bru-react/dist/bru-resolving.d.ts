import React from 'react';

export interface BruResolvingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruResolving(props: BruResolvingProps): React.ReactElement;
export default BruResolving;

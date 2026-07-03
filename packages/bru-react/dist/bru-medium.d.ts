import React from 'react';

export interface BruMediumProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruMedium(props: BruMediumProps): React.ReactElement;
export default BruMedium;

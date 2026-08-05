import React from 'react';

export interface MinaSearchDotProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSearchDot(props: MinaSearchDotProps): React.ReactElement;
export default MinaSearchDot;

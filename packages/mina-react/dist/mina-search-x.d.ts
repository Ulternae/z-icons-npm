import React from 'react';

export interface MinaSearchXProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSearchX(props: MinaSearchXProps): React.ReactElement;
export default MinaSearchX;

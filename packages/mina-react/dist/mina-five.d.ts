import React from 'react';

export interface MinaFiveProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaFive(props: MinaFiveProps): React.ReactElement;
export default MinaFive;

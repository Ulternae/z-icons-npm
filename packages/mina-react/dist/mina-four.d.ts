import React from 'react';

export interface MinaFourProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaFour(props: MinaFourProps): React.ReactElement;
export default MinaFour;

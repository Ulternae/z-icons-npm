import React from 'react';

export interface MinaCogFourProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCogFour(props: MinaCogFourProps): React.ReactElement;
export default MinaCogFour;

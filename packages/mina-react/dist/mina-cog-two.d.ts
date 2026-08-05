import React from 'react';

export interface MinaCogTwoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCogTwo(props: MinaCogTwoProps): React.ReactElement;
export default MinaCogTwo;

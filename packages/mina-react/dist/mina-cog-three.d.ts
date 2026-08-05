import React from 'react';

export interface MinaCogThreeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCogThree(props: MinaCogThreeProps): React.ReactElement;
export default MinaCogThree;

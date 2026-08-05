import React from 'react';

export interface MinaCogOneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCogOne(props: MinaCogOneProps): React.ReactElement;
export default MinaCogOne;

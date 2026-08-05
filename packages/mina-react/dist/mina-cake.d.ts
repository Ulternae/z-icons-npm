import React from 'react';

export interface MinaCakeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCake(props: MinaCakeProps): React.ReactElement;
export default MinaCake;

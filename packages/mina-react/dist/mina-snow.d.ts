import React from 'react';

export interface MinaSnowProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSnow(props: MinaSnowProps): React.ReactElement;
export default MinaSnow;

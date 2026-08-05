import React from 'react';

export interface MinaAmpersandsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaAmpersands(props: MinaAmpersandsProps): React.ReactElement;
export default MinaAmpersands;

import React from 'react';

export interface MinaLocationPlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLocationPlus(props: MinaLocationPlusProps): React.ReactElement;
export default MinaLocationPlus;

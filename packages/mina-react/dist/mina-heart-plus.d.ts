import React from 'react';

export interface MinaHeartPlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaHeartPlus(props: MinaHeartPlusProps): React.ReactElement;
export default MinaHeartPlus;

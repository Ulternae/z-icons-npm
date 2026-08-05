import React from 'react';

export interface MinaHeartXProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaHeartX(props: MinaHeartXProps): React.ReactElement;
export default MinaHeartX;

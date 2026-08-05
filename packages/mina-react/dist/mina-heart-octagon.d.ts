import React from 'react';

export interface MinaHeartOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaHeartOctagon(props: MinaHeartOctagonProps): React.ReactElement;
export default MinaHeartOctagon;

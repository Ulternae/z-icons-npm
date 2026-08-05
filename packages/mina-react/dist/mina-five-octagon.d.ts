import React from 'react';

export interface MinaFiveOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaFiveOctagon(props: MinaFiveOctagonProps): React.ReactElement;
export default MinaFiveOctagon;

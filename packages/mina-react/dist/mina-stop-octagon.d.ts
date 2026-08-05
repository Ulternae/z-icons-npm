import React from 'react';

export interface MinaStopOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaStopOctagon(props: MinaStopOctagonProps): React.ReactElement;
export default MinaStopOctagon;

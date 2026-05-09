import React from 'react';

export interface MinaStopOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaStopOctagon: React.FC<MinaStopOctagonProps>;
export default MinaStopOctagon;

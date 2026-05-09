import React from 'react';

export interface MinaStopProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaStop: React.FC<MinaStopProps>;
export default MinaStop;

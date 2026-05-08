import React from 'react';

export interface MinaAddQueueProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaAddQueue: React.FC<MinaAddQueueProps>;
export default MinaAddQueue;

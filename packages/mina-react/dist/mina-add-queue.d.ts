import React from 'react';

export interface MinaAddQueueProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaAddQueue(props: MinaAddQueueProps): React.ReactElement;
export default MinaAddQueue;

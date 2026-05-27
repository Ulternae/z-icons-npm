import React from 'react';

export interface NeoCitySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoCitySolid: React.FC<NeoCitySolidProps>;
export default NeoCitySolid;

import React from 'react';

export interface NeoCitySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoCitySolid(props: NeoCitySolidProps): React.ReactElement;
export default NeoCitySolid;

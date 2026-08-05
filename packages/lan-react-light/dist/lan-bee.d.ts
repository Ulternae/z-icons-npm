import React from 'react';

export interface LanBeeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBee(props: LanBeeProps): React.ReactElement;
export default LanBee;

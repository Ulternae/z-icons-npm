import React from 'react';

export interface LanCarBusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCarBusThin(props: LanCarBusThinProps): React.ReactElement;
export default LanCarBusThin;

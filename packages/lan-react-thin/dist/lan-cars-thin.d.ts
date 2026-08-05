import React from 'react';

export interface LanCarsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCarsThin(props: LanCarsThinProps): React.ReactElement;
export default LanCarsThin;

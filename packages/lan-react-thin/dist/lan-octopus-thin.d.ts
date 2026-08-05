import React from 'react';

export interface LanOctopusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanOctopusThin(props: LanOctopusThinProps): React.ReactElement;
export default LanOctopusThin;

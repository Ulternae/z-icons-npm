import React from 'react';

export interface LanMinusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMinusThin(props: LanMinusThinProps): React.ReactElement;
export default LanMinusThin;

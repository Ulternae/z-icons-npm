import React from 'react';

export interface LanCartMinusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCartMinusThin(props: LanCartMinusThinProps): React.ReactElement;
export default LanCartMinusThin;

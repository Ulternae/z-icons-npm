import React from 'react';

export interface LanAbacusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAbacusThin(props: LanAbacusThinProps): React.ReactElement;
export default LanAbacusThin;

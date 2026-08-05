import React from 'react';

export interface LanHandHornsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandHornsThin(props: LanHandHornsThinProps): React.ReactElement;
export default LanHandHornsThin;

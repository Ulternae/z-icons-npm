import React from 'react';

export interface LanCardsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCardsThin(props: LanCardsThinProps): React.ReactElement;
export default LanCardsThin;

import React from 'react';

export interface LanShortsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShortsThin(props: LanShortsThinProps): React.ReactElement;
export default LanShortsThin;

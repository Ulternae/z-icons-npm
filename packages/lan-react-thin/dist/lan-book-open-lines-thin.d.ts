import React from 'react';

export interface LanBookOpenLinesThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBookOpenLinesThin(props: LanBookOpenLinesThinProps): React.ReactElement;
export default LanBookOpenLinesThin;

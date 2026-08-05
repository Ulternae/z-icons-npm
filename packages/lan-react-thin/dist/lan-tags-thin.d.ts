import React from 'react';

export interface LanTagsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTagsThin(props: LanTagsThinProps): React.ReactElement;
export default LanTagsThin;

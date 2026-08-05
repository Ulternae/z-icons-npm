import React from 'react';

export interface LanGrid2MinusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGrid2MinusThin(props: LanGrid2MinusThinProps): React.ReactElement;
export default LanGrid2MinusThin;

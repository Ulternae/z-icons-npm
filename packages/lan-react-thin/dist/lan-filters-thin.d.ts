import React from 'react';

export interface LanFiltersThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFiltersThin(props: LanFiltersThinProps): React.ReactElement;
export default LanFiltersThin;

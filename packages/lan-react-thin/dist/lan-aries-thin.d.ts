import React from 'react';

export interface LanAriesThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAriesThin(props: LanAriesThinProps): React.ReactElement;
export default LanAriesThin;

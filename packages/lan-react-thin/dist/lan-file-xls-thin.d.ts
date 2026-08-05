import React from 'react';

export interface LanFileXlsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileXlsThin(props: LanFileXlsThinProps): React.ReactElement;
export default LanFileXlsThin;

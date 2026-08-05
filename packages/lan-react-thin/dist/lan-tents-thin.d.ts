import React from 'react';

export interface LanTentsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTentsThin(props: LanTentsThinProps): React.ReactElement;
export default LanTentsThin;

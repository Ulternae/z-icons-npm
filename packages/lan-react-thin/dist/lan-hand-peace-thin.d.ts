import React from 'react';

export interface LanHandPeaceThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandPeaceThin(props: LanHandPeaceThinProps): React.ReactElement;
export default LanHandPeaceThin;

import React from 'react';

export interface LanNotdefThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanNotdefThin(props: LanNotdefThinProps): React.ReactElement;
export default LanNotdefThin;

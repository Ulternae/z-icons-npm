import React from 'react';

export interface LanNotdefProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanNotdef(props: LanNotdefProps): React.ReactElement;
export default LanNotdef;

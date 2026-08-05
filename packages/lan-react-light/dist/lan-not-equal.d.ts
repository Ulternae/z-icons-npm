import React from 'react';

export interface LanNotEqualProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanNotEqual(props: LanNotEqualProps): React.ReactElement;
export default LanNotEqual;

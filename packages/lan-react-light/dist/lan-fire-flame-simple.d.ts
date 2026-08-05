import React from 'react';

export interface LanFireFlameSimpleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFireFlameSimple(props: LanFireFlameSimpleProps): React.ReactElement;
export default LanFireFlameSimple;

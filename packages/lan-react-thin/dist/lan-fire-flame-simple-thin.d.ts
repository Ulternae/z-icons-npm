import React from 'react';

export interface LanFireFlameSimpleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFireFlameSimpleThin(props: LanFireFlameSimpleThinProps): React.ReactElement;
export default LanFireFlameSimpleThin;

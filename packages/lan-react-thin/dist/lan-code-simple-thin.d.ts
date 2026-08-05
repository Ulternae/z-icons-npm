import React from 'react';

export interface LanCodeSimpleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCodeSimpleThin(props: LanCodeSimpleThinProps): React.ReactElement;
export default LanCodeSimpleThin;

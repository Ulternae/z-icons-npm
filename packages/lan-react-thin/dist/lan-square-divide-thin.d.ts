import React from 'react';

export interface LanSquareDivideThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareDivideThin(props: LanSquareDivideThinProps): React.ReactElement;
export default LanSquareDivideThin;

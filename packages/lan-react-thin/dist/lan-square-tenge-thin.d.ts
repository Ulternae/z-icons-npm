import React from 'react';

export interface LanSquareTengeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareTengeThin(props: LanSquareTengeThinProps): React.ReactElement;
export default LanSquareTengeThin;

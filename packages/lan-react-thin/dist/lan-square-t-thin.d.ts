import React from 'react';

export interface LanSquareTThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareTThin(props: LanSquareTThinProps): React.ReactElement;
export default LanSquareTThin;

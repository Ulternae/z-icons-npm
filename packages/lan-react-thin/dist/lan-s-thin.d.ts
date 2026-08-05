import React from 'react';

export interface LanSThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSThin(props: LanSThinProps): React.ReactElement;
export default LanSThin;

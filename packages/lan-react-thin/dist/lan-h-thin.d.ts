import React from 'react';

export interface LanHThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHThin(props: LanHThinProps): React.ReactElement;
export default LanHThin;

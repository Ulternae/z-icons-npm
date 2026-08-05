import React from 'react';

export interface LanXThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanXThin(props: LanXThinProps): React.ReactElement;
export default LanXThin;

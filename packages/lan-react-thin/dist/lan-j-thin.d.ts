import React from 'react';

export interface LanJThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanJThin(props: LanJThinProps): React.ReactElement;
export default LanJThin;

import React from 'react';

export interface LanBThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBThin(props: LanBThinProps): React.ReactElement;
export default LanBThin;

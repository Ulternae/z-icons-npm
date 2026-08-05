import React from 'react';

export interface LanBarnThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBarnThin(props: LanBarnThinProps): React.ReactElement;
export default LanBarnThin;

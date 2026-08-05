import React from 'react';

export interface LanBagelThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBagelThin(props: LanBagelThinProps): React.ReactElement;
export default LanBagelThin;

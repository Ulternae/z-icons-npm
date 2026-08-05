import React from 'react';

export interface LanBulldozerThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBulldozerThin(props: LanBulldozerThinProps): React.ReactElement;
export default LanBulldozerThin;

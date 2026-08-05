import React from 'react';

export interface LanBoltAutoThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBoltAutoThin(props: LanBoltAutoThinProps): React.ReactElement;
export default LanBoltAutoThin;

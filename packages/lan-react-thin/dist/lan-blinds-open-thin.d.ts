import React from 'react';

export interface LanBlindsOpenThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBlindsOpenThin(props: LanBlindsOpenThinProps): React.ReactElement;
export default LanBlindsOpenThin;

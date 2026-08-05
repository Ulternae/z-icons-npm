import React from 'react';

export interface LanBoomboxThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBoomboxThin(props: LanBoomboxThinProps): React.ReactElement;
export default LanBoomboxThin;

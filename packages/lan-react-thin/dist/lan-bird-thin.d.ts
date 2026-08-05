import React from 'react';

export interface LanBirdThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBirdThin(props: LanBirdThinProps): React.ReactElement;
export default LanBirdThin;

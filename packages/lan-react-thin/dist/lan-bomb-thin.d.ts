import React from 'react';

export interface LanBombThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBombThin(props: LanBombThinProps): React.ReactElement;
export default LanBombThin;

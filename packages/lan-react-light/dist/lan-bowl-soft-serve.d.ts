import React from 'react';

export interface LanBowlSoftServeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBowlSoftServe(props: LanBowlSoftServeProps): React.ReactElement;
export default LanBowlSoftServe;

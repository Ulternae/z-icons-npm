import React from 'react';

export interface LanBowlSoftServeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBowlSoftServeThin(props: LanBowlSoftServeThinProps): React.ReactElement;
export default LanBowlSoftServeThin;

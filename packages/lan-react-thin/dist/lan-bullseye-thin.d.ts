import React from 'react';

export interface LanBullseyeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBullseyeThin(props: LanBullseyeThinProps): React.ReactElement;
export default LanBullseyeThin;

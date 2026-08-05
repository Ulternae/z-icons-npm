import React from 'react';

export interface LanHeartRateThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHeartRateThin(props: LanHeartRateThinProps): React.ReactElement;
export default LanHeartRateThin;

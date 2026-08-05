import React from 'react';

export interface LanUsdCircleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUsdCircleThin(props: LanUsdCircleThinProps): React.ReactElement;
export default LanUsdCircleThin;

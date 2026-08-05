import React from 'react';

export interface LanEarthAsiaThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEarthAsiaThin(props: LanEarthAsiaThinProps): React.ReactElement;
export default LanEarthAsiaThin;

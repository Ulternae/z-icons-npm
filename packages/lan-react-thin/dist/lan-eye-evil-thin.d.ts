import React from 'react';

export interface LanEyeEvilThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEyeEvilThin(props: LanEyeEvilThinProps): React.ReactElement;
export default LanEyeEvilThin;

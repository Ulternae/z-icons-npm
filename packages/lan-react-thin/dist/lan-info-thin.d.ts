import React from 'react';

export interface LanInfoThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanInfoThin(props: LanInfoThinProps): React.ReactElement;
export default LanInfoThin;

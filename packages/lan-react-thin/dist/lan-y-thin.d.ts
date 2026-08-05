import React from 'react';

export interface LanYThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanYThin(props: LanYThinProps): React.ReactElement;
export default LanYThin;

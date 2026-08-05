import React from 'react';

export interface LanUserTagThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserTagThin(props: LanUserTagThinProps): React.ReactElement;
export default LanUserTagThin;

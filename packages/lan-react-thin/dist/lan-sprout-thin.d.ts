import React from 'react';

export interface LanSproutThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSproutThin(props: LanSproutThinProps): React.ReactElement;
export default LanSproutThin;

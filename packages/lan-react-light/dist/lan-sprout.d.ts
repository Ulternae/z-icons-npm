import React from 'react';

export interface LanSproutProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSprout(props: LanSproutProps): React.ReactElement;
export default LanSprout;

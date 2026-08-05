import React from 'react';

export interface LanShovelThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShovelThin(props: LanShovelThinProps): React.ReactElement;
export default LanShovelThin;

import React from 'react';

export interface LanFlowerThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFlowerThin(props: LanFlowerThinProps): React.ReactElement;
export default LanFlowerThin;

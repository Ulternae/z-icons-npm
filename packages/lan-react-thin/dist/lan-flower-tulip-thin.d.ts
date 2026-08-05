import React from 'react';

export interface LanFlowerTulipThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFlowerTulipThin(props: LanFlowerTulipThinProps): React.ReactElement;
export default LanFlowerTulipThin;

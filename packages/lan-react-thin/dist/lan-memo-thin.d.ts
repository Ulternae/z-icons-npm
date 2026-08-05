import React from 'react';

export interface LanMemoThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMemoThin(props: LanMemoThinProps): React.ReactElement;
export default LanMemoThin;

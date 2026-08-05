import React from 'react';

export interface LanOvenThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanOvenThin(props: LanOvenThinProps): React.ReactElement;
export default LanOvenThin;

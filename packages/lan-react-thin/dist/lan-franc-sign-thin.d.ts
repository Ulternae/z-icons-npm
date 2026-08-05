import React from 'react';

export interface LanFrancSignThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFrancSignThin(props: LanFrancSignThinProps): React.ReactElement;
export default LanFrancSignThin;

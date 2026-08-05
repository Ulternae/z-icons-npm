import React from 'react';

export interface LanSportsballThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSportsballThin(props: LanSportsballThinProps): React.ReactElement;
export default LanSportsballThin;

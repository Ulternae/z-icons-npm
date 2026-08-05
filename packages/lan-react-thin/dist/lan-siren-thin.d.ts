import React from 'react';

export interface LanSirenThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSirenThin(props: LanSirenThinProps): React.ReactElement;
export default LanSirenThin;

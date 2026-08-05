import React from 'react';

export interface LanPeoplePantsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPeoplePantsThin(props: LanPeoplePantsThinProps): React.ReactElement;
export default LanPeoplePantsThin;

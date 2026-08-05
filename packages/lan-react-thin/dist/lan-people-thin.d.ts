import React from 'react';

export interface LanPeopleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPeopleThin(props: LanPeopleThinProps): React.ReactElement;
export default LanPeopleThin;

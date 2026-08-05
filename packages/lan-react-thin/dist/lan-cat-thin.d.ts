import React from 'react';

export interface LanCatThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCatThin(props: LanCatThinProps): React.ReactElement;
export default LanCatThin;

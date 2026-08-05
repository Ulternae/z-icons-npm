import React from 'react';

export interface LanFilterThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFilterThin(props: LanFilterThinProps): React.ReactElement;
export default LanFilterThin;

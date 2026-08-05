import React from 'react';

export interface LanOwlThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanOwlThin(props: LanOwlThinProps): React.ReactElement;
export default LanOwlThin;

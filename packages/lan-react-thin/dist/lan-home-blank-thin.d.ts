import React from 'react';

export interface LanHomeBlankThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHomeBlankThin(props: LanHomeBlankThinProps): React.ReactElement;
export default LanHomeBlankThin;

import React from 'react';

export interface LanNumpadThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanNumpadThin(props: LanNumpadThinProps): React.ReactElement;
export default LanNumpadThin;

import React from 'react';

export interface LanBoxOpenFullThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBoxOpenFullThin(props: LanBoxOpenFullThinProps): React.ReactElement;
export default LanBoxOpenFullThin;

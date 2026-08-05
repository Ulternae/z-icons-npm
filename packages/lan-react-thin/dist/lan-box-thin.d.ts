import React from 'react';

export interface LanBoxThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBoxThin(props: LanBoxThinProps): React.ReactElement;
export default LanBoxThin;

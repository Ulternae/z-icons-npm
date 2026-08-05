import React from 'react';

export interface LanLocustThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLocustThin(props: LanLocustThinProps): React.ReactElement;
export default LanLocustThin;

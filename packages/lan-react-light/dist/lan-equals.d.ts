import React from 'react';

export interface LanEqualsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEquals(props: LanEqualsProps): React.ReactElement;
export default LanEquals;

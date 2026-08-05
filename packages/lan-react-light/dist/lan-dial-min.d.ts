import React from 'react';

export interface LanDialMinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDialMin(props: LanDialMinProps): React.ReactElement;
export default LanDialMin;

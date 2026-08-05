import React from 'react';

export interface LanEmptySetProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEmptySet(props: LanEmptySetProps): React.ReactElement;
export default LanEmptySet;

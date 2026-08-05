import React from 'react';

export interface LanExpandProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanExpand(props: LanExpandProps): React.ReactElement;
export default LanExpand;

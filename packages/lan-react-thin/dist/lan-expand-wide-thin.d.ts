import React from 'react';

export interface LanExpandWideThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanExpandWideThin(props: LanExpandWideThinProps): React.ReactElement;
export default LanExpandWideThin;

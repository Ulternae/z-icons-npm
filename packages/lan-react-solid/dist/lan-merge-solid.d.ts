import React from 'react';

export interface LanMergeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMergeSolid(props: LanMergeSolidProps): React.ReactElement;
export default LanMergeSolid;

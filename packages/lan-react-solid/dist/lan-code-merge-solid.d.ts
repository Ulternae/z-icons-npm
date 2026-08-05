import React from 'react';

export interface LanCodeMergeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCodeMergeSolid(props: LanCodeMergeSolidProps): React.ReactElement;
export default LanCodeMergeSolid;

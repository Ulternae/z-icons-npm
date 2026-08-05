import React from 'react';

export interface LanWindowCloseSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWindowCloseSolid(props: LanWindowCloseSolidProps): React.ReactElement;
export default LanWindowCloseSolid;

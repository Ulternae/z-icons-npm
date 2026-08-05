import React from 'react';

export interface LanStoreSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStoreSolid(props: LanStoreSolidProps): React.ReactElement;
export default LanStoreSolid;

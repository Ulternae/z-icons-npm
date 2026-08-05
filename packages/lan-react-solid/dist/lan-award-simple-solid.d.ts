import React from 'react';

export interface LanAwardSimpleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAwardSimpleSolid(props: LanAwardSimpleSolidProps): React.ReactElement;
export default LanAwardSimpleSolid;

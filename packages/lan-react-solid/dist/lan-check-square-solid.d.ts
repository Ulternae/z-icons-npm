import React from 'react';

export interface LanCheckSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCheckSquareSolid(props: LanCheckSquareSolidProps): React.ReactElement;
export default LanCheckSquareSolid;

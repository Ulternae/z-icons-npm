import React from 'react';

export interface LanSmokeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSmokeSolid(props: LanSmokeSolidProps): React.ReactElement;
export default LanSmokeSolid;

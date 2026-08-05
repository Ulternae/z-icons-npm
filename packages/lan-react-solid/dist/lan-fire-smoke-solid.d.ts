import React from 'react';

export interface LanFireSmokeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFireSmokeSolid(props: LanFireSmokeSolidProps): React.ReactElement;
export default LanFireSmokeSolid;

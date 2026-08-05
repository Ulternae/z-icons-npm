import React from 'react';

export interface LanCheckDoubleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCheckDoubleSolid(props: LanCheckDoubleSolidProps): React.ReactElement;
export default LanCheckDoubleSolid;

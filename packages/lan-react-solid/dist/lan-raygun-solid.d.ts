import React from 'react';

export interface LanRaygunSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRaygunSolid(props: LanRaygunSolidProps): React.ReactElement;
export default LanRaygunSolid;

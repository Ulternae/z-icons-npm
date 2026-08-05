import React from 'react';

export interface LanFeatherSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFeatherSolid(props: LanFeatherSolidProps): React.ReactElement;
export default LanFeatherSolid;

import React from 'react';

export interface LanTeethSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTeethSolid(props: LanTeethSolidProps): React.ReactElement;
export default LanTeethSolid;

import React from 'react';

export interface LanDeskSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDeskSolid(props: LanDeskSolidProps): React.ReactElement;
export default LanDeskSolid;

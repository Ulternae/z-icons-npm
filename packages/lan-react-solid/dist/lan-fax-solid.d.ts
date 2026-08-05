import React from 'react';

export interface LanFaxSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaxSolid(props: LanFaxSolidProps): React.ReactElement;
export default LanFaxSolid;

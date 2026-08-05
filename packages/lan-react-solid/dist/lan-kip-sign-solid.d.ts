import React from 'react';

export interface LanKipSignSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanKipSignSolid(props: LanKipSignSolidProps): React.ReactElement;
export default LanKipSignSolid;

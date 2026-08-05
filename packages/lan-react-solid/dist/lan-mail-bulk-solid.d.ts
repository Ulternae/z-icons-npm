import React from 'react';

export interface LanMailBulkSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMailBulkSolid(props: LanMailBulkSolidProps): React.ReactElement;
export default LanMailBulkSolid;

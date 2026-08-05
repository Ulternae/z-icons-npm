import React from 'react';

export interface LanMailBulkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMailBulk(props: LanMailBulkProps): React.ReactElement;
export default LanMailBulk;

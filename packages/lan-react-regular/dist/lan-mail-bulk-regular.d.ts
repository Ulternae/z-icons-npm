import React from 'react';

export interface LanMailBulkRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMailBulkRegular(props: LanMailBulkRegularProps): React.ReactElement;
export default LanMailBulkRegular;

import React from 'react';

export interface LanMailBulkThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMailBulkThin(props: LanMailBulkThinProps): React.ReactElement;
export default LanMailBulkThin;

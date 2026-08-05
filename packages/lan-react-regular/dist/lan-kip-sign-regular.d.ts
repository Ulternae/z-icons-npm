import React from 'react';

export interface LanKipSignRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanKipSignRegular(props: LanKipSignRegularProps): React.ReactElement;
export default LanKipSignRegular;

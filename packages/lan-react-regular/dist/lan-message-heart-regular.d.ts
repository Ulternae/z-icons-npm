import React from 'react';

export interface LanMessageHeartRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMessageHeartRegular(props: LanMessageHeartRegularProps): React.ReactElement;
export default LanMessageHeartRegular;

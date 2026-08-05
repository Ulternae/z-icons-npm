import React from 'react';

export interface LanBookHeartRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBookHeartRegular(props: LanBookHeartRegularProps): React.ReactElement;
export default LanBookHeartRegular;

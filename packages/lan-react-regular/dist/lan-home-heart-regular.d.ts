import React from 'react';

export interface LanHomeHeartRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHomeHeartRegular(props: LanHomeHeartRegularProps): React.ReactElement;
export default LanHomeHeartRegular;

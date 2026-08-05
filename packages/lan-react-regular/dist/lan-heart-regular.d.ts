import React from 'react';

export interface LanHeartRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHeartRegular(props: LanHeartRegularProps): React.ReactElement;
export default LanHeartRegular;

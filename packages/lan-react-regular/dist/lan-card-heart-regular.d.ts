import React from 'react';

export interface LanCardHeartRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCardHeartRegular(props: LanCardHeartRegularProps): React.ReactElement;
export default LanCardHeartRegular;

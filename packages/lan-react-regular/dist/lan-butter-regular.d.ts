import React from 'react';

export interface LanButterRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanButterRegular(props: LanButterRegularProps): React.ReactElement;
export default LanButterRegular;

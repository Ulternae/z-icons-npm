import React from 'react';

export interface LanDoNotEnterRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDoNotEnterRegular(props: LanDoNotEnterRegularProps): React.ReactElement;
export default LanDoNotEnterRegular;

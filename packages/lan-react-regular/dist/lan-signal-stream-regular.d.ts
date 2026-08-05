import React from 'react';

export interface LanSignalStreamRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSignalStreamRegular(props: LanSignalStreamRegularProps): React.ReactElement;
export default LanSignalStreamRegular;

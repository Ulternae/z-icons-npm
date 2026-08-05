import React from 'react';

export interface LanOptionRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanOptionRegular(props: LanOptionRegularProps): React.ReactElement;
export default LanOptionRegular;

import React from 'react';

export interface LanMessageCodeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMessageCodeRegular(props: LanMessageCodeRegularProps): React.ReactElement;
export default LanMessageCodeRegular;

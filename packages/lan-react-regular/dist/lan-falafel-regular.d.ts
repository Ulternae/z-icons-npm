import React from 'react';

export interface LanFalafelRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFalafelRegular(props: LanFalafelRegularProps): React.ReactElement;
export default LanFalafelRegular;

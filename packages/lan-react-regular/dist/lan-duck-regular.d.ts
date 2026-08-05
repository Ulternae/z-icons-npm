import React from 'react';

export interface LanDuckRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDuckRegular(props: LanDuckRegularProps): React.ReactElement;
export default LanDuckRegular;

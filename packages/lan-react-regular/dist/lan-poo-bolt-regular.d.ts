import React from 'react';

export interface LanPooBoltRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPooBoltRegular(props: LanPooBoltRegularProps): React.ReactElement;
export default LanPooBoltRegular;

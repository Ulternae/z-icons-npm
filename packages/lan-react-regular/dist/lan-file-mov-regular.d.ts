import React from 'react';

export interface LanFileMovRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileMovRegular(props: LanFileMovRegularProps): React.ReactElement;
export default LanFileMovRegular;

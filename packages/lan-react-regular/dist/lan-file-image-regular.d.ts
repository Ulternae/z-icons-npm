import React from 'react';

export interface LanFileImageRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileImageRegular(props: LanFileImageRegularProps): React.ReactElement;
export default LanFileImageRegular;

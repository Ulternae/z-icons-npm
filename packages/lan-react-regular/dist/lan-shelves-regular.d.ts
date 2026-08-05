import React from 'react';

export interface LanShelvesRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShelvesRegular(props: LanShelvesRegularProps): React.ReactElement;
export default LanShelvesRegular;

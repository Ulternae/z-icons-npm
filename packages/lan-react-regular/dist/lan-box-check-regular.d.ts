import React from 'react';

export interface LanBoxCheckRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBoxCheckRegular(props: LanBoxCheckRegularProps): React.ReactElement;
export default LanBoxCheckRegular;

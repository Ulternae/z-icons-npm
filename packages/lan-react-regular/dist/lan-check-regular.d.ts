import React from 'react';

export interface LanCheckRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCheckRegular(props: LanCheckRegularProps): React.ReactElement;
export default LanCheckRegular;

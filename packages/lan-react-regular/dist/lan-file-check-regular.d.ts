import React from 'react';

export interface LanFileCheckRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileCheckRegular(props: LanFileCheckRegularProps): React.ReactElement;
export default LanFileCheckRegular;

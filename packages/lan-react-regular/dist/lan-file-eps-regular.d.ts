import React from 'react';

export interface LanFileEpsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileEpsRegular(props: LanFileEpsRegularProps): React.ReactElement;
export default LanFileEpsRegular;

import React from 'react';

export interface LanFileJsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileJsRegular(props: LanFileJsRegularProps): React.ReactElement;
export default LanFileJsRegular;

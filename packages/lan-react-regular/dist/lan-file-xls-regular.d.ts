import React from 'react';

export interface LanFileXlsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileXlsRegular(props: LanFileXlsRegularProps): React.ReactElement;
export default LanFileXlsRegular;

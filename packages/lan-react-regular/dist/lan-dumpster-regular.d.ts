import React from 'react';

export interface LanDumpsterRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDumpsterRegular(props: LanDumpsterRegularProps): React.ReactElement;
export default LanDumpsterRegular;

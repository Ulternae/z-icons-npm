import React from 'react';

export interface LanCompressRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCompressRegular(props: LanCompressRegularProps): React.ReactElement;
export default LanCompressRegular;

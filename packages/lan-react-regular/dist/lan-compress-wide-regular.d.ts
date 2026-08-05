import React from 'react';

export interface LanCompressWideRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCompressWideRegular(props: LanCompressWideRegularProps): React.ReactElement;
export default LanCompressWideRegular;

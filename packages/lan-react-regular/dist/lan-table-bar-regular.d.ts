import React from 'react';

export interface LanTableBarRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTableBarRegular(props: LanTableBarRegularProps): React.ReactElement;
export default LanTableBarRegular;

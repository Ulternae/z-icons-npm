import React from 'react';

export interface LanStampRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStampRegular(props: LanStampRegularProps): React.ReactElement;
export default LanStampRegular;

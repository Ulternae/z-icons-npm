import React from 'react';

export interface LanBriefsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBriefsRegular(props: LanBriefsRegularProps): React.ReactElement;
export default LanBriefsRegular;

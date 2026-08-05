import React from 'react';

export interface LanUnicycleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUnicycleRegular(props: LanUnicycleRegularProps): React.ReactElement;
export default LanUnicycleRegular;

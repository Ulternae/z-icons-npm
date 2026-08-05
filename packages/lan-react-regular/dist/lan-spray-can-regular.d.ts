import React from 'react';

export interface LanSprayCanRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSprayCanRegular(props: LanSprayCanRegularProps): React.ReactElement;
export default LanSprayCanRegular;

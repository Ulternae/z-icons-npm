import React from 'react';

export interface LanURegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanURegular(props: LanURegularProps): React.ReactElement;
export default LanURegular;

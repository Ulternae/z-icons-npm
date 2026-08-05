import React from 'react';

export interface LanFireFlameRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFireFlameRegular(props: LanFireFlameRegularProps): React.ReactElement;
export default LanFireFlameRegular;

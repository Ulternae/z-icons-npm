import React from 'react';

export interface LanSneakerRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSneakerRegular(props: LanSneakerRegularProps): React.ReactElement;
export default LanSneakerRegular;

import React from 'react';

export interface LanSpaRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSpaRegular(props: LanSpaRegularProps): React.ReactElement;
export default LanSpaRegular;

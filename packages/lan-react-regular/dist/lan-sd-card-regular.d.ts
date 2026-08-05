import React from 'react';

export interface LanSdCardRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSdCardRegular(props: LanSdCardRegularProps): React.ReactElement;
export default LanSdCardRegular;

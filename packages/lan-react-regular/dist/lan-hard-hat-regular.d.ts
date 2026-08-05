import React from 'react';

export interface LanHardHatRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHardHatRegular(props: LanHardHatRegularProps): React.ReactElement;
export default LanHardHatRegular;

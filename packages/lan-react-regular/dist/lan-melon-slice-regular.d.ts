import React from 'react';

export interface LanMelonSliceRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMelonSliceRegular(props: LanMelonSliceRegularProps): React.ReactElement;
export default LanMelonSliceRegular;

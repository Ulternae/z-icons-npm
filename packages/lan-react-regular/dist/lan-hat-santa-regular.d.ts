import React from 'react';

export interface LanHatSantaRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHatSantaRegular(props: LanHatSantaRegularProps): React.ReactElement;
export default LanHatSantaRegular;

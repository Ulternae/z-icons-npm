import React from 'react';

export interface LanPeapodRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPeapodRegular(props: LanPeapodRegularProps): React.ReactElement;
export default LanPeapodRegular;

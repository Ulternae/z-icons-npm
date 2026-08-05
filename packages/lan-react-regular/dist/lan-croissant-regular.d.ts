import React from 'react';

export interface LanCroissantRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCroissantRegular(props: LanCroissantRegularProps): React.ReactElement;
export default LanCroissantRegular;

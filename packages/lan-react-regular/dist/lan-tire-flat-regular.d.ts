import React from 'react';

export interface LanTireFlatRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTireFlatRegular(props: LanTireFlatRegularProps): React.ReactElement;
export default LanTireFlatRegular;

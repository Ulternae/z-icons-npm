import React from 'react';

export interface LanAmpGuitarRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAmpGuitarRegular(props: LanAmpGuitarRegularProps): React.ReactElement;
export default LanAmpGuitarRegular;

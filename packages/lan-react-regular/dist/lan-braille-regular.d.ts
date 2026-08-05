import React from 'react';

export interface LanBrailleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBrailleRegular(props: LanBrailleRegularProps): React.ReactElement;
export default LanBrailleRegular;

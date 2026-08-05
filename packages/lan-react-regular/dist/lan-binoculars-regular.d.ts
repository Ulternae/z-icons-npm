import React from 'react';

export interface LanBinocularsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBinocularsRegular(props: LanBinocularsRegularProps): React.ReactElement;
export default LanBinocularsRegular;

import React from 'react';

export interface LanPassportRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPassportRegular(props: LanPassportRegularProps): React.ReactElement;
export default LanPassportRegular;

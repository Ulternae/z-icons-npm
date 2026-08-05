import React from 'react';

export interface LanPassportProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPassport(props: LanPassportProps): React.ReactElement;
export default LanPassport;

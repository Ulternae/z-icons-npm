import React from 'react';

export interface LanHandPeaceProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandPeace(props: LanHandPeaceProps): React.ReactElement;
export default LanHandPeace;

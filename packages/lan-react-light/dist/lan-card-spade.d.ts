import React from 'react';

export interface LanCardSpadeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCardSpade(props: LanCardSpadeProps): React.ReactElement;
export default LanCardSpade;

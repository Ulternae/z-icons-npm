import React from 'react';

export interface LanPhoneSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPhoneSquare(props: LanPhoneSquareProps): React.ReactElement;
export default LanPhoneSquare;

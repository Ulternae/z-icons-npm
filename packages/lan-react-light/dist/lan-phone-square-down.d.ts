import React from 'react';

export interface LanPhoneSquareDownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPhoneSquareDown(props: LanPhoneSquareDownProps): React.ReactElement;
export default LanPhoneSquareDown;

import React from 'react';

export interface LanPhoneSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPhoneSquareSolid(props: LanPhoneSquareSolidProps): React.ReactElement;
export default LanPhoneSquareSolid;

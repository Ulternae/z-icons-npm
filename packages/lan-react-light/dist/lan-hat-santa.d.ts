import React from 'react';

export interface LanHatSantaProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHatSanta(props: LanHatSantaProps): React.ReactElement;
export default LanHatSanta;

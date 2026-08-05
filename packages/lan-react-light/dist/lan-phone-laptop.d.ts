import React from 'react';

export interface LanPhoneLaptopProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPhoneLaptop(props: LanPhoneLaptopProps): React.ReactElement;
export default LanPhoneLaptop;

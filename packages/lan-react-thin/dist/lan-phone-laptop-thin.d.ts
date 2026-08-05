import React from 'react';

export interface LanPhoneLaptopThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPhoneLaptopThin(props: LanPhoneLaptopThinProps): React.ReactElement;
export default LanPhoneLaptopThin;

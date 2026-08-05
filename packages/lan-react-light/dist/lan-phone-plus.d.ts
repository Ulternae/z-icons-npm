import React from 'react';

export interface LanPhonePlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPhonePlus(props: LanPhonePlusProps): React.ReactElement;
export default LanPhonePlus;

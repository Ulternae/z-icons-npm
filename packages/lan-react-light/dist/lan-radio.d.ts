import React from 'react';

export interface LanRadioProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRadio(props: LanRadioProps): React.ReactElement;
export default LanRadio;

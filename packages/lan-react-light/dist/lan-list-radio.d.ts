import React from 'react';

export interface LanListRadioProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanListRadio(props: LanListRadioProps): React.ReactElement;
export default LanListRadio;

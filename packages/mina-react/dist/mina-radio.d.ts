import React from 'react';

export interface MinaRadioProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaRadio(props: MinaRadioProps): React.ReactElement;
export default MinaRadio;

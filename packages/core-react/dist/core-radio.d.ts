import React from 'react';

export interface CoreRadioProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreRadio(props: CoreRadioProps): React.ReactElement;
export default CoreRadio;

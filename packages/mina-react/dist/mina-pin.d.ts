import React from 'react';

export interface MinaPinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaPin(props: MinaPinProps): React.ReactElement;
export default MinaPin;

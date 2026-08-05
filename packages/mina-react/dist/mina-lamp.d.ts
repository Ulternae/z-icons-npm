import React from 'react';

export interface MinaLampProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLamp(props: MinaLampProps): React.ReactElement;
export default MinaLamp;

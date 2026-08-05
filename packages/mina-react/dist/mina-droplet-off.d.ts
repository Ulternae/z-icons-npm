import React from 'react';

export interface MinaDropletOffProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaDropletOff(props: MinaDropletOffProps): React.ReactElement;
export default MinaDropletOff;

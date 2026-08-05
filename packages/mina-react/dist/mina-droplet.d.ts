import React from 'react';

export interface MinaDropletProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaDroplet(props: MinaDropletProps): React.ReactElement;
export default MinaDroplet;

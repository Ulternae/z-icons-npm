import React from 'react';

export interface NeoDropletProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoDroplet(props: NeoDropletProps): React.ReactElement;
export default NeoDroplet;

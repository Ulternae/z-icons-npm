import React from 'react';

export interface NeoDropletProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoDroplet: React.FC<NeoDropletProps>;
export default NeoDroplet;

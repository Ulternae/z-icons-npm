import React from 'react';

export interface NeoFishProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoFish(props: NeoFishProps): React.ReactElement;
export default NeoFish;

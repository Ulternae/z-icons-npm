import React from 'react';

export interface CoreFishProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreFish(props: CoreFishProps): React.ReactElement;
export default CoreFish;

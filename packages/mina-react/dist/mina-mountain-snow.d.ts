import React from 'react';

export interface MinaMountainSnowProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaMountainSnow(props: MinaMountainSnowProps): React.ReactElement;
export default MinaMountainSnow;

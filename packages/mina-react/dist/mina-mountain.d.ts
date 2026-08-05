import React from 'react';

export interface MinaMountainProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaMountain(props: MinaMountainProps): React.ReactElement;
export default MinaMountain;

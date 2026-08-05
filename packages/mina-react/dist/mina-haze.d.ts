import React from 'react';

export interface MinaHazeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaHaze(props: MinaHazeProps): React.ReactElement;
export default MinaHaze;

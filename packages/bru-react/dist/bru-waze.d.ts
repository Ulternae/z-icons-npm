import React from 'react';

export interface BruWazeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruWaze(props: BruWazeProps): React.ReactElement;
export default BruWaze;

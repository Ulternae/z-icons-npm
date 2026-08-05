import React from 'react';

export interface MinaMusicCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaMusicCircle(props: MinaMusicCircleProps): React.ReactElement;
export default MinaMusicCircle;

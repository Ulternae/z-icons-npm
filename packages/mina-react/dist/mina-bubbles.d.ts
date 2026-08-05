import React from 'react';

export interface MinaBubblesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBubbles(props: MinaBubblesProps): React.ReactElement;
export default MinaBubbles;

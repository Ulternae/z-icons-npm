import React from 'react';

export interface MinaBubblesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBubbles: React.FC<MinaBubblesProps>;
export default MinaBubbles;

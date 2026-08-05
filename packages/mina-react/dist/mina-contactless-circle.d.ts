import React from 'react';

export interface MinaContactlessCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaContactlessCircle(props: MinaContactlessCircleProps): React.ReactElement;
export default MinaContactlessCircle;

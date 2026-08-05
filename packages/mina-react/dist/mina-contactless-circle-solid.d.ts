import React from 'react';

export interface MinaContactlessCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaContactlessCircleSolid(props: MinaContactlessCircleSolidProps): React.ReactElement;
export default MinaContactlessCircleSolid;

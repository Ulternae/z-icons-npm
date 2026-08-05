import React from 'react';

export interface MinaMagnetProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaMagnet(props: MinaMagnetProps): React.ReactElement;
export default MinaMagnet;

import React from 'react';

export interface MinaCameraProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCamera(props: MinaCameraProps): React.ReactElement;
export default MinaCamera;

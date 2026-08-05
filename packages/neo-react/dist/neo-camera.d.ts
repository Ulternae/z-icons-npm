import React from 'react';

export interface NeoCameraProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoCamera(props: NeoCameraProps): React.ReactElement;
export default NeoCamera;

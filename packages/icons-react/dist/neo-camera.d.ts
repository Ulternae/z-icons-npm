import React from 'react';

export interface NeoCameraProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoCamera: React.FC<NeoCameraProps>;
export default NeoCamera;

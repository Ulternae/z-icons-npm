import React from 'react';

export interface NeoFaceGrinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoFaceGrin: React.FC<NeoFaceGrinProps>;
export default NeoFaceGrin;

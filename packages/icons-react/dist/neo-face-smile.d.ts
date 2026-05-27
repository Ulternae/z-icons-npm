import React from 'react';

export interface NeoFaceSmileProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoFaceSmile: React.FC<NeoFaceSmileProps>;
export default NeoFaceSmile;

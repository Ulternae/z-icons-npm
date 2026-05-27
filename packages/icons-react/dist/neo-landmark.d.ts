import React from 'react';

export interface NeoLandmarkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoLandmark: React.FC<NeoLandmarkProps>;
export default NeoLandmark;

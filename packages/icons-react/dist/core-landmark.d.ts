import React from 'react';

export interface CoreLandmarkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreLandmark: React.FC<CoreLandmarkProps>;
export default CoreLandmark;

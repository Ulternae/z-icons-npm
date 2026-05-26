import React from 'react';

export interface LanOpenCaptioningSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanOpenCaptioningSolid: React.FC<LanOpenCaptioningSolidProps>;
export default LanOpenCaptioningSolid;

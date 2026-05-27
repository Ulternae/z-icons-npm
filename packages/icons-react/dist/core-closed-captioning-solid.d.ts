import React from 'react';

export interface CoreClosedCaptioningSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreClosedCaptioningSolid: React.FC<CoreClosedCaptioningSolidProps>;
export default CoreClosedCaptioningSolid;

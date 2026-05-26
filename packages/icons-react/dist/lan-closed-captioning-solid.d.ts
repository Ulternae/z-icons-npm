import React from 'react';

export interface LanClosedCaptioningSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClosedCaptioningSolid: React.FC<LanClosedCaptioningSolidProps>;
export default LanClosedCaptioningSolid;

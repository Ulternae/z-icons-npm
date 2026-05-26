import React from 'react';

export interface LanRectangleLandscapeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRectangleLandscapeThin: React.FC<LanRectangleLandscapeThinProps>;
export default LanRectangleLandscapeThin;

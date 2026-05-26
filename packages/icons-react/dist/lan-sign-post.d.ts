import React from 'react';

export interface LanSignPostProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSignPost: React.FC<LanSignPostProps>;
export default LanSignPost;

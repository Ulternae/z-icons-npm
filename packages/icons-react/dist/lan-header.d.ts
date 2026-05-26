import React from 'react';

export interface LanHeaderProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHeader: React.FC<LanHeaderProps>;
export default LanHeader;

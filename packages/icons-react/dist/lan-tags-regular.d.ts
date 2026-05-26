import React from 'react';

export interface LanTagsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTagsRegular: React.FC<LanTagsRegularProps>;
export default LanTagsRegular;

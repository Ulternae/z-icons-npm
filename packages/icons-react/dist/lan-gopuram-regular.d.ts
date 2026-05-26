import React from 'react';

export interface LanGopuramRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGopuramRegular: React.FC<LanGopuramRegularProps>;
export default LanGopuramRegular;

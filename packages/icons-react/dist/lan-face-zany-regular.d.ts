import React from 'react';

export interface LanFaceZanyRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceZanyRegular: React.FC<LanFaceZanyRegularProps>;
export default LanFaceZanyRegular;

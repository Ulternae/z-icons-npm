import React from 'react';

export interface LanPipeCollarRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPipeCollarRegular: React.FC<LanPipeCollarRegularProps>;
export default LanPipeCollarRegular;

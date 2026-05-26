import React from 'react';

export interface LanFaceFlushedRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceFlushedRegular: React.FC<LanFaceFlushedRegularProps>;
export default LanFaceFlushedRegular;

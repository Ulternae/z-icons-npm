import React from 'react';

export interface LanFilePenRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFilePenRegular: React.FC<LanFilePenRegularProps>;
export default LanFilePenRegular;

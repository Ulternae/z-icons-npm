import React from 'react';

export interface LanFileLockRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileLockRegular: React.FC<LanFileLockRegularProps>;
export default LanFileLockRegular;

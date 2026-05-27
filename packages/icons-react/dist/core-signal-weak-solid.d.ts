import React from 'react';

export interface CoreSignalWeakSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreSignalWeakSolid: React.FC<CoreSignalWeakSolidProps>;
export default CoreSignalWeakSolid;

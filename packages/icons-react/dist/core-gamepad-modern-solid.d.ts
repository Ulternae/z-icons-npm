import React from 'react';

export interface CoreGamepadModernSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreGamepadModernSolid: React.FC<CoreGamepadModernSolidProps>;
export default CoreGamepadModernSolid;

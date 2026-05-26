import React from 'react';

export interface LanCoffinSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCoffinSolid: React.FC<LanCoffinSolidProps>;
export default LanCoffinSolid;

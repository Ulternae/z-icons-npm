import React from 'react';

export interface LanCoffinSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCoffinSolid(props: LanCoffinSolidProps): React.ReactElement;
export default LanCoffinSolid;

import React from 'react';

export interface LanStampSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStampSolid(props: LanStampSolidProps): React.ReactElement;
export default LanStampSolid;
